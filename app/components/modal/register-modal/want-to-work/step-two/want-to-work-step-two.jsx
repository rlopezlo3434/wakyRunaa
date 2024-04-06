import Button from '@/app/components/button/button'
import TextField from '@/app/components/textfield/textfield'
import { useLoginStore } from '@/app/lib/stores/login-store'
import { useRegisterStore } from '@/app/lib/stores/register-store'
import MainIcon from '@/public/icons/ic_main_logo_alt.svg'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'react-responsive-modal'
import styles from './want-to-work-step-two.module.css'

const WANT_TO_WORK_DEFAULT_FORM_DATE = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: ''
}

export const WantToWorkStepTwo = () => {
	const state = useRegisterStore(state => state)
	const [formData, setFormData] = useState({
		name: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})
	const { setLoginState } = useLoginStore(state => state)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const handleChange = (fieldName, value) => {
		setFormData(prevFormData => ({
			...prevFormData,
			[fieldName]: value
		}))
	}

	const onClose = () => {
		state.setStep(0)
	}

	const onSubmit = handleSubmit(async data => {
		if (data.password != data.confirmPassword) {
			return alert('Contraseña no coinciden')
		}

		const res = await fetch('/api/auth/register', {
			method: 'POST',
			body: JSON.stringify({
				name: data.name,
				lastName: data.lastName,
				email: data.email,
				password: data.password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const resJSON = await res.json()
		console.log(resJSON)
		// Resetear el estado del formulario a sus valores por defecto
		setFormData({
			name: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: ''
		})
	})

	const isOpen = useMemo(() => {
		return state.step === 1
	}, [state.step])

	return (
		<Modal
			onClose={onClose}
			open={isOpen}
			center
			classNames={{
				modal: styles.modal_content
			}}
		>
			<form onSubmit={onSubmit} className={styles.content}>
				<Image priority src={MainIcon} className={styles.image} alt="wakyruna" />
				<h2>Regístrate como candidato</h2>
				<p>Ingresa tus datos y comienza a optimizar tu tiempo</p>
				<div className={styles.content_inputs}>
					<TextField label="Nombre" name="name" type="text" register={register} value={formData.name} onChange={e => handleChange('name', e.target.value)} />
					<TextField label="Apellido" name="lastName" type="text" register={register} value={formData.lastName} onChange={e => handleChange('lastName', e.target.value)} />
					<TextField label="Correo electrónico" name="email" type="email" register={register} value={formData.email} onChange={e => handleChange('email', e.target.value)} />
					<TextField label="Contraseña" name="password" type="password" register={register} value={formData.password} onChange={e => handleChange('password', e.target.value)} />
					<div className={styles.legend_password}>
						<span>Recuerda que tu contraseña debe contener:</span>
						<div>
							<div>
								<div className={styles.validate_sign}></div>
								<span>6 - 12 caracteres</span>
							</div>
							<div>
								<div className={styles.validate_sign}></div>
								<span>Letras</span>
							</div>
							<div>
								<div className={styles.validate_sign}></div>
								<span>Números</span>
							</div>
						</div>
					</div>
					<TextField
						label="Confirma contraseña"
						name="confirmPassword"
						type="password"
						register={register}
						value={formData.confirmPassword}
						onChange={e => handleChange('confirmPassword', e.target.value)}
					/>
					<div className={styles.legend_password_box}>
						<div className={styles.validate_sign}></div>
						<span>Vuelve a escribir la contraseña como está en el campo anterior</span>
					</div>
					<Button type="submit">Crear Cuenta</Button>
				</div>
				<div
					onClick={() => {
						onClose()
						setLoginState(true)
					}}
					className={styles.footer_login_redirect}
				>
					<span>¿Ya tienes una cuenta? </span>
					<a> Iniciar sesión</a>
				</div>
			</form>
		</Modal>
	)
}
