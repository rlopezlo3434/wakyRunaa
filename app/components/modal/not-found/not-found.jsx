import pcError from '@/public/pictures/pc_error.svg'
import Image from 'next/image'
import Modal from 'react-responsive-modal'
import Button from '../../button/button'
import styles from './not-found.module.css'

export const NotFound = ({ isOpen = true, onClose }) => {
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
					<h2>Sucedio algo inesperado</h2>
					<p>Por favor, vuelve a intentarlo en unos minutos</p>
					<Button variant="ghost" w="300px">
						Regresar
					</Button>
				</div>
				<Image src={pcError} alt="error" />
			</div>
		</Modal>
	)
}
