'use client'
import icHome from '@/public/icons/ic_Home.svg'
import icInfo from '@/public/icons/ic_info.svg'
import icLupa from '@/public/icons/ic_lupa.svg'
import icNotes from '@/public/icons/ic_notes.svg'
import icPerson from '@/public/icons/ic_person2.svg'
import icPersonComputer from '@/public/icons/ic_person_computer.svg'
import icText from '@/public/icons/ic_text.svg'
import Image from 'next/image'

import Footer from '../components/footer/footer'
import HeaderPortal from '../components/headerPortal/headerPortal'
import LeftSidebar from '../components/leftSideBar/SideBar'
import style from './home_person.module.css'

const MOCK_LINKS = [{ name: 'Cerrar sesión', path: '/vacantes' }]
const LINKS = [
	{ image: icHome, name: 'Inicio', path: '/home_person_search' },
	{ image: icPerson, name: 'Mi perfil', path: '/home_person_search' },
	{ image: icLupa, name: 'Buscar trabajo', path: '/home_person_search' },
	{ image: icText, name: 'Contácta un asesor', path: '/home_person_search' },
	{ image: icNotes, name: 'Mis portulaciones', path: '/home_person/home_person_search' }
]
export default function homePerson() {
	return (
		<div className={style.home_container}>
			<HeaderPortal hasBackground={true} links={MOCK_LINKS} />
			<div className={style.home_main_container}>
				<LeftSidebar hasBackground={true} links={LINKS} />
				<div className={style.container}>
					<div className={style.home_body}>
						<div>
							<h2>¡Ya eres parte de WakiRuna!</h2>
							<p>Comienza personalizando tu perfil y busca las mejores opciones laborales del mercado</p>
						</div>
						<div>
							<Image src={icPersonComputer} alt="person" />
						</div>
					</div>
					<div className={style.info_container}>
						<Image src={icInfo} alt="info" />
						<span>Muy pronto tendrás en este espacio noticias y novedades para ti</span>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
