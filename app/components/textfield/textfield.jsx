import React from 'react'
import styles from './textfield.module.css'
/**
 * @param {string} label -
 * @param {string} variant - {outlined|ghost}
 * @param {boolean} textarea -
 */
const TextField = React.forwardRef(({ textarea, label, name, variant, bg, type, register, value, onChange }, ref) => {
	const customBg = {
		backgroundColor: bg
	}

	const registerField = register ? register : () => {}

	return (
		<label className={`${styles.textfield_label} ${styles[variant]}`}>
			{textarea ? (
				<textarea ref={ref} maxLength="540" className={`${styles.textfield_input}`} placeholder=" " name={name} />
			) : (
				<input ref={ref} type={type} className={`${styles.textfield_input}`} placeholder=" " {...registerField(name, { required: true })} value={value} onChange={onChange} />
			)}
			<span className={styles.textfield_placeholder} style={customBg}>
				{label}
			</span>
		</label>
	)
})

TextField.displayName = 'TextField'

export default TextField
