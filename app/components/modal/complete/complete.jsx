import icLikePerson from '@/public/icons/ic_like_person.svg'
import Image from 'next/image'
import Modal from 'react-responsive-modal'
import styles from './complete.module.css'

export const Complete = ({ isOpen = true, onClose }) => {
	return (
		<Modal
			onClose={onClose}
			open={isOpen}
			center
			classNames={{
				modal: styles.modal_content
			}}
		>
			<div className={styles.content}>
				<div>
					<h2>¡Excelente!</h2>
					<p>Un asesor de WakiRuna se comunicará contigo en maximo 24 horas</p>
					<span>*Si solicitaste el contacto un fin de semana o feriado, el asesor te contactará el siguiente día útil</span>
				</div>
				<Image src={icLikePerson} alt="great" />
			</div>
		</Modal>
	)
}
