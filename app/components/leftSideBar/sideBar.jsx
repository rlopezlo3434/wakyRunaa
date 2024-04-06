'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './sideBar.module.css'
/**
 * @param {string[]} links - header links
 * @param {string} hasBackground - header links
 */

export default function LeftSidebar({ links = [], hasBackground = true }) {
	const pathname = usePathname()
	return (
		<div className={`${hasBackground && style.sidebar_background} ${style.sidebar_container}`}>
			<div className={style.sidebar_links}>
				<div className={style.user_detail}>
					<div className={style.nameUser}>JG</div>
				</div>
				{links.map((link, index) => (
					<Link href={link.path} className={`${style.link} ${pathname === link.path && style.link_active}`} key={index}>
						{link.image && <Image className={style.image} src={link.image} alt={link.name} />} {link.name}
					</Link>
				))}
			</div>
		</div>
	)
}
