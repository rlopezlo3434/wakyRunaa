import icLikePerson from '@/public/icons/ic_like_person.svg'
import Image from 'next/image'
import Modal from 'react-responsive-modal'
import Button from '../../button/button'
import styles from './complete-contact.module.css'

export const CompleteContact = ({ isOpen = true, onClose }) => {
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
					<h2>¡Felicidades!</h2>
					<p>Te has registrado con éxito y ahora puedes optimizar tu tiempo en busca de un mejor empleo</p>
					<Button variant="secondary" w="300px">
						Comenzar ahora
					</Button>
				</div>
				<Image src={icLikePerson} alt="great" />
			</div>
		</Modal>
	)
}
