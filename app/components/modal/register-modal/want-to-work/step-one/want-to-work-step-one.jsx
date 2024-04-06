'use client'
import Button from '@/app/components/button/button'
import { useLoginStore } from '@/app/lib/stores/login-store'
import { WANT_TO_WORK, useRegisterStore } from '@/app/lib/stores/register-store'
import IcEmail from '@/public/icons/ic_email.svg'
import IcFacebook from '@/public/icons/ic_facebook_circle.svg'
import IcGoogle from '@/public/icons/ic_google.svg'
import MainIcon from '@/public/icons/ic_main_logo_alt.svg'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import Modal from 'react-responsive-modal'
import styles from './want-to-work-step-one.module.css'

export const WantToWorkStepOne = () => {
	const { data: session } = useSession()

	const router = useRouter()

	const handleGoogleSignIn = async () => {
		const result = await signIn('google', { redirect: false })

		if (result?.error) {
			console.error('Error durante la autenticación con Google:', result.error)
			return
		}
		console.log('hola')
		// Si la autenticación con Google fue exitosa, registrar al usuario
		const res = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify({
				fullname: session.user.name,
				email: session.user.email,
				gmail: 1
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		if (res.ok) {
			router.push('/home_person')
		}

		const data = await res.json()
		console.log('Registro exitoso:', data)
		window.location.href = '/home_person'
	}

	const { setStateModal, registerMode, setStep, setRegisterMode } = useRegisterStore(state => state)
	const { setLoginState } = useLoginStore(state => state)

	const isOpen = useMemo(() => {
		return registerMode === WANT_TO_WORK
	}, [registerMode])

	return (
		<Modal
			open={isOpen}
			center
			onClose={() => setRegisterMode(null)}
			classNames={{
				modal: styles.modal_content
			}}
			closeOnOverlayClick={false}
		>
			<div className={styles.content}>
				<Image priority src={MainIcon} alt="wakyruna" />
				<h2>Regístrate como candidato</h2>
				<div className={styles.content_btns}>
					<Button
						variant="ghost"
						onClick={() => {
							setRegisterMode(null)
							setStep(1)
						}}
					>
						<div className={styles.login_btn}>
							<Image src={IcEmail} alt="email" />
							<span>Ingresa con correo</span>
						</div>
					</Button>
					<div className={styles.stepone_separator}>
						<hr />
						<span>o si gustas</span>
						<hr />
					</div>
					<Button onClick={handleGoogleSignIn} redirect="/home_person" variant="ghost">
						<div className={styles.login_btn}>
							<Image src={IcGoogle} alt="google" className={styles.google_image} />
							<span>Ingresa con Google</span>
						</div>
					</Button>
					<Button variant="ghost">
						<div className={styles.login_btn}>
							<Image src={IcFacebook} alt="facebook" />
							<span>Ingresa con Facebook</span>
						</div>
					</Button>
				</div>
				<div
					onClick={() => {
						setRegisterMode(null)
						setLoginState(true)
					}}
					className={styles.footer_login_redirect}
				>
					<span>¿Ya tienes una cuenta? </span>
					<a> Iniciar sesión</a>
				</div>
			</div>
		</Modal>
	)
}
