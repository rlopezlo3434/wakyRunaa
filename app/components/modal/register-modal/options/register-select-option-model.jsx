import { LOOKING_PERSONNEL, WANT_TO_WORK, useRegisterStore } from '@/app/lib/stores/register-store'
import PcLookStaff from '@/public/pictures/pc_look_staff.svg'
import PcNeedJob from '@/public/pictures/pc_need_job.svg'
import Image from 'next/image'
import { Modal } from 'react-responsive-modal'
import styles from './register-select-option-model.module.css'

export const RegisterSelectOptionModal = () => {
	const { setMainState, isMainOpen, setRegisterMode } = useRegisterStore(state => state)

	const changeMode = value => {
		setRegisterMode(value)
		setMainState(false)
	}

	return (
		<Modal
			open={isMainOpen}
			center
			onClose={() => {
				setMainState(false)
			}}
			classNames={{
				modal: styles.modal_content
			}}
			closeOnOverlayClick={false}
		>
			<div className={styles.content}>
				<h2>¡Comienza ahora!</h2>
				<p>
					<strong>Solicita los servicios que Waki Runa </strong>tiene para ti y escala en el mundo laboral
				</p>
				<div className={styles.register_card_option_layout}>
					<div onClick={() => changeMode(WANT_TO_WORK)} className={styles.register_card_option}>
						<Image src={PcNeedJob} alt="need_job" />
						<span>Quiero trabajar</span>
					</div>
					<div onClick={() => changeMode(LOOKING_PERSONNEL)} className={styles.register_card_option}>
						<Image src={PcLookStaff} alt="look_staff" />
						<span>Busco personal</span>
					</div>
				</div>
			</div>
		</Modal>
	)
}
