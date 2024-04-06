'use client'
import Button from '@/app/components/button/button'
import IcEmail from '@/public/icons/ic_email.svg'
import IcFacebook from '@/public/icons/ic_facebook_circle.svg'
import IcGoogle from '@/public/icons/ic_google.svg'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import styles from './step-one.module.css'

export const RegisterStepOne = ({ nextStep }) => {
	const { data: session } = useSession()
	console.log(session)
	console.log(session.user.name)
	const handleGoogleSignIn = async () => {
		const result = await signIn('google', { redirect: false })

		if (result?.error) {
			console.error('Error durante la autenticación con Google:', result.error)
			return
		}

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

		if (!res.ok) {
			console.error('Error durante el registro:', res.statusText)
			return
		}
		const data = await res.json()
		console.log('Registro exitoso:', data)
	}
	return (
		<>
			<h2>Crea una cuenta como candidato</h2>
			<div className={styles.content_btns}>
				<Button onClick={nextStep} variant="ghost">
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
				{/* <button onClick={() => signIn('google', { redirect: false })}></button> */}
				<Button onClick={handleGoogleSignIn} variant="ghost">
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
			<div>
				<span>¿Ya tienes una cuenta? </span>
				<a> Iniciar sesión</a>
			</div>
		</>
	)
}
