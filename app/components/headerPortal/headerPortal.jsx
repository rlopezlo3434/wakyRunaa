'use client'
import LogoutIcon from '@/public/icons/ic_logout.svg'
import MainIcon from '@/public/icons/ic_main_logo.svg'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './headerPortal.module.css'

/**
 * @param {string[]} links - header links
 * @param {string} hasBackground - header links
 */

export default function HeaderPortal({ links = [], hasBackground = true }) {
	const pathname = usePathname()

	return (
		<div className={`${hasBackground && styles.header_background} ${styles.header_container}`}>
			<div className={styles.header_left}>
				<Link href="/">
					<Image priority src={MainIcon} alt="wakyruna" />
				</Link>
			</div>
			<div className={styles.header_right}>
				<div className={styles.iconLogout}>
					<Image priority src={LogoutIcon} alt="Cerrar" />
				</div>
				<div className={styles.header_links}>
					{links.map((link, index) => (
						<Link href={link.path} className={`${styles.link} ${pathname === link.path && styles.link_active}`} key={index}>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
