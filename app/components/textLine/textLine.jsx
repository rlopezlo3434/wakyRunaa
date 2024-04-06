import Image from 'next/image'
import styles from './textLine.module.css'

const TextLine = ({ image, title }) => {
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<Image className={styles.image} src={image} alt="wakyruna" />
				<a className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
				{/* <p className={styles.title}>{title}</p> */}
			</div>
		</div>
	)
}

export default TextLine
