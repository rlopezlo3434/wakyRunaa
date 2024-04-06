'use client'
import Button from '@/app/components/button/button'
import TextField from '@/app/components/textfield/textfield'
import { useForm } from 'react-hook-form'
import styles from './step-two.module.css'
export const RegisterStepTwo = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

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
		// console.log('Datos del formulario:', data)
	})

	return (
		<>
			<h2>Regístrate como candidato</h2>
			<p>Ingresa tus datos y comienza a optimizar tu tiempo</p>

			<form onSubmit={onSubmit} className={styles.content_inputs}>
				<TextField label="Nombre" name="name" type="text" register={register} />
				<TextField label="Apellido" name="lastName" type="text" register={register} />
				<TextField label="Correo electrónico" name="email" type="email" register={register} />
				<TextField label="Contraseña" name="password" type="password" register={register} />
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
				<TextField label="Confirma contraseña" name="confirmPassword" type="password" register={register} />
				<div className={styles.legend_password_box}>
					<div className={styles.validate_sign}></div>
					<span>Vuelve a escribir la contraseña como está en el campo anterior</span>
				</div>
				<Button type="submit">Crear Cuenta</Button>
			</form>
			<div>
				<span>¿Ya tienes una cuenta? </span>
				<a> Iniciar sesión</a>
			</div>
		</>
	)
}
