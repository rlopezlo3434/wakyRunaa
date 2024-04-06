import { useLoginStore } from '@/app/lib/stores/login-store'
import { useRegisterStore } from '@/app/lib/stores/register-store'
import IcEmail from '@/public/icons/ic_email.svg'
import IcFacebook from '@/public/icons/ic_facebook_circle.svg'
import IcGoogle from '@/public/icons/ic_google.svg'
import Image from 'next/image'
import { Modal } from 'react-responsive-modal'
import Button from '../../button/button'
import styles from './login-model.module.css'

export const LoginModal = ({ onRegisterClick }) => {
	const { isOpen, setStepOneState, setLoginState } = useLoginStore(state => state)
	const { setMainState } = useRegisterStore()

	return (
		<Modal
			open={isOpen}
			center
			onClose={() => {
				setLoginState(false)
			}}
			classNames={{
				modal: styles.modal_content
			}}
		>
			<div className={styles.content}>
				<h2>Inicia sesión</h2>
				<div className={styles.content_btns}>
					<Button variant="ghost">
						<div className={styles.login_btn}>
							<Image src={IcGoogle} alt="google" className={styles.google_image} />
							<span>Continuar con Google</span>
						</div>
					</Button>
					<Button variant="ghost">
						<div className={styles.login_btn}>
							<Image src={IcFacebook} alt="facebook" />
							<span>Continuar con Facebook</span>
						</div>
					</Button>
					<Button
						variant="ghost"
						onClick={() => {
							setLoginState(false)
							setStepOneState(true)
						}}
					>
						<div className={styles.login_btn}>
							<Image src={IcEmail} alt="email" />
							<span>Continuar con email</span>
						</div>
					</Button>
				</div>
				<div
					onClick={() => {
						setLoginState(false)
						setMainState(true)
					}}
					className={styles.footer_register_redirect}
				>
					<span>¿Aún no tienes una cuenta?</span>
					<a onClick={onRegisterClick}>Regístrate aquí</a>
				</div>
			</div>
		</Modal>
	)
}
