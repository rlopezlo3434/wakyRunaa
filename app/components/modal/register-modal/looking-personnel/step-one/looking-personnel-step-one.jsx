import Button from '@/app/components/button/button'
import TextField from '@/app/components/textfield/textfield'
import { LOOKING_PERSONNEL, useRegisterStore } from '@/app/lib/stores/register-store'
import MainIcon from '@/public/icons/ic_main_logo_alt.svg'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import Modal from 'react-responsive-modal'
import styles from './looking-personnel-step-one.module.css'

const LOOKING_PERSONNEL_DEFAULT_FORM_DATE = {
	firstName: '',
	lastName: '',
	phoneNumber: '',
	email: '',
	business: '',
	address: '',
	documentNumber: '',
	preferenceContact: 0
}

const PRF_PHONE_NUMBER = 1
const PRF_EMAIL = 0

export const LookingPersonnelStepOne = () => {
	const state = useRegisterStore(state => state)
	const [formData, setFormData] = useState(LOOKING_PERSONNEL_DEFAULT_FORM_DATE)

	const handleChange = (fieldName, value) => {
		console.log({ fieldName, value })
		setFormData(prevFormData => ({
			...prevFormData,
			[fieldName]: value
		}))
	}

	const onClose = () => {
		state.setRegisterMode(null)
	}

	const isOpen = useMemo(() => {
		return state.registerMode === LOOKING_PERSONNEL
	}, [state.registerMode])

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
				<Image priority src={MainIcon} alt="wakyruna" />
				<h2>Busco personal para mi empresa</h2>
				<span>Ingresa los datos y te ayudaremos en lo que necesites</span>
				<div className={styles.content_inputs}>
					<TextField label="Nombre" />
					<TextField label="Apellidos" />
					<TextField label="Télefono" />
					<TextField label="Correo electronico" />
					<div className={styles.content_input_type_contact}>
						<span>Tipo de contacto preferido</span>
						<div className={styles.content_input_type_contact_checkbox}>
							<div>
								<input
									type="checkbox"
									checked={formData.preferenceContact === PRF_EMAIL}
									onClick={() => {}}
									onChange={() => {
										handleChange('preferenceContact', PRF_EMAIL)
									}}
								/>
								<label>Email</label>
							</div>
							<div>
								<input
									type="checkbox"
									checked={formData.preferenceContact === PRF_PHONE_NUMBER}
									onChange={() => {
										handleChange('preferenceContact', PRF_PHONE_NUMBER)
									}}
								/>
								<label>Teléfono</label>
							</div>
						</div>
					</div>
					<TextField label="Empresa" />
					<TextField label="Dirección" />
					<TextField label="N° RUC" />
				</div>
				<Button w="200px">Enviar</Button>
			</div>
		</Modal>
	)
}
