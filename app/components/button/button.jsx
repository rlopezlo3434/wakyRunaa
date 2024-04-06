import { useState } from 'react'
import styles from './button.module.css'

export default function Button({ children, w, onClick = () => {}, outline, variant = 'primary', mini }) {
	const [ripples, setRipples] = useState([])

	const ripple = e => {
		const button = e.currentTarget
		const rect = button.getBoundingClientRect()
		const size = Math.max(rect.width, rect.height)
		const x = e.clientX - rect.left - size / 2
		const y = e.clientY - rect.top - size / 2

		const newRipple = {
			x,
			y,
			size,
			id: Date.now().valueOf()
		}

		setRipples([...ripples, newRipple])

		setTimeout(() => {
			setRipples(prevRipples => prevRipples.filter(ripple => ripple.id !== newRipple.id))
		}, 1000)
	}

	return (
		<button
			onClick={e => {
				ripple(e)
				onClick()
			}}
			className={`
        btn
        ${styles.btn}
        ${outline ? styles.outline : styles.btn}
        ${styles[variant]}
        ${mini && styles.mini}
      `}
			style={{ maxWidth: w || '100%', position: 'relative' }}
		>
			{children}
			{ripples.map(ripple => (
				<span
					key={ripple.id}
					className={styles.ripples}
					style={{
						top: ripple.y + 'px',
						left: ripple.x + 'px',
						width: ripple.size + 'px',
						height: ripple.size + 'px'
					}}
				/>
			))}
		</button>
	)
}
