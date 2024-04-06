import Facebook from '@/public/icons/ic_facebook.svg'
import Instagram from '@/public/icons/ic_instagram.svg'
import MainIcon from '@/public/icons/ic_main_logo.svg'
import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
	return (
		<div className={styles.footer_container}>
			<div className={styles.icons_container}>
				<Image priority src={MainIcon} alt="wakyruna" />
				<div className={styles.only_icons}>
					<Image priority className={styles.icons} src={Facebook} alt="facebook" />
					<Image priority className={styles.icons} src={Instagram} alt="instagram" style={{ marginLeft: '20px' }} />
				</div>
			</div>
			<p className={styles.copy_right}>
				&copy; 2023 Waki Runa. Todos los derechos reservados | Si tienes dudas escríbenos a <strong>contacto@wakiruna.pe</strong>
			</p>
		</div>
	)
}
