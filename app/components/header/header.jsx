'use client'
import { useLoginStore } from '@/app/lib/stores/login-store'
import MainIcon from '@/public/icons/ic_main_logo.svg'
import icMenu from '@/public/icons/ic_menu.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { LoginModal } from '../modal/login-modal/login-modal'
import { LoginStepOne } from '../modal/login-modal/step-one/login-step-one'
import { RecoverPassword } from '../modal/recover-password/recover-password'
import { LookingPersonnelStepOne } from '../modal/register-modal/looking-personnel/step-one/looking-personnel-step-one'
import { RegisterSelectOptionModal } from '../modal/register-modal/options/register-select-option-model'
import { WantToWorkStepOne } from '../modal/register-modal/want-to-work/step-one/want-to-work-step-one'
import { WantToWorkStepTwo } from '../modal/register-modal/want-to-work/step-two/want-to-work-step-two'
import styles from './header.module.css'

/**
 * @param {string[]} links - header links
 * @param {string} hasBackground - header links
 */

export default function Header({ links = [], hasBackground = true, isActiveBtn = true }) {
	const pathname = usePathname()
	const [show, setShow] = useState(true)

	/**
	 * actions login modal
	 */
	const { isOpen, setLoginState } = useLoginStore(state => state)

	return (
		<div className={`${hasBackground && styles.header_background} ${styles.header_container}`}>
			{/* // login modals  */}
			<RecoverPassword />
			<LoginModal />
			<LoginStepOne />
			{/* // register modals */}
			<RegisterSelectOptionModal />
			<LookingPersonnelStepOne />
			<WantToWorkStepOne />
			<WantToWorkStepTwo />
			<Link href="/">
				<Image priority src={MainIcon} alt="wakyruna" />
			</Link>
			<div className={styles.header_menu_btn} onClick={() => setShow(!show)} onBlur={() => setShow(false)}>
				<Image src={icMenu} alt="menu" />
			</div>
			<div className={`${styles.header_links} ${show && styles.isActive}`}>
				{links.map((link, index) => (
					<Link href={link.path} className={`${styles.link} ${pathname === link.path && styles.link_active}`} key={index}>
						{link.name}
					</Link>
				))}
				{/* {isActiveBtn && (
					<Button w={'100px'} onClick={() => setLoginState(true)}>
						Acceder
					</Button>
				)} */}
			</div>
		</div>
	)
}
