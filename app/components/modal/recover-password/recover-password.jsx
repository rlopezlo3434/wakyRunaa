import Button from '@/app/components/button/button'
import TextField from '@/app/components/textfield/textfield'
import MainIcon from '@/public/icons/ic_main_logo_alt.svg'
import Image from 'next/image'
import Modal from 'react-responsive-modal'
import { useLoginStore } from '../../../lib/stores/login-store'
import styles from './recover-password.module.css'

export const RecoverPassword = () => {
	const { setRecoverPasswordState, isOpenRecoverPassword } = useLoginStore(state => state)

	return (
		<Modal
			onClose={() => setRecoverPasswordState(false)}
			open={isOpenRecoverPassword}
			center
			classNames={{
				modal: styles.modal_content
			}}
		>
			<div className={styles.content}>
				<Image src={MainIcon} alt="wakyruna" />
				<h2>Restablece tu contraseña</h2>
				<span>Ingresa el correo con el que te registraste</span>
				<div className={styles.content_inputs}>
					<TextField label="Correo electronico" />
					<Button>Recuperar</Button>
					<div className={styles.footer_register_redirect}>
						<span>¿Aún no tienes una cuenta?</span>
						<a>Regístrate aqui</a>
					</div>
					<div className={styles.footer_register_redirect}>
						<span> Inicia sesión como empresa</span>
						<a> aqui </a>
					</div>
				</div>
			</div>
		</Modal>
	)
}
