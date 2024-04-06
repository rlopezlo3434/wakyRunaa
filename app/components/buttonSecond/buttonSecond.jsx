'use client'
import PropTypes from 'prop-types'
import styles from './buttonSecond.module.css'

const ButtonSecond = ({ children, url }) => {
	const buttonText = children || 'Leer más'

	const handleclick = () => {
		if (url) {
			window.location.href(url, '_blank')
		}
	}

	return (
		<div className={styles.buttonWrapper} onClick={handleclick}>
			<a className={styles.button} href={url}>
				{buttonText}
			</a>
		</div>
	)
}

ButtonSecond.propTypes = {
	children: PropTypes.node,
	redirectUrl: PropTypes.string
}

export default ButtonSecond
