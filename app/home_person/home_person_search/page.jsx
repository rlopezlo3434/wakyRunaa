'use client'
import icHome from '@/public/icons/ic_Home.svg'
import icLupa from '@/public/icons/ic_lupa.svg'
import icNotes from '@/public/icons/ic_notes.svg'
import icPerson from '@/public/icons/ic_person2.svg'
import icText from '@/public/icons/ic_text.svg'
import Footer from '../../components/footer/footer'
import HeaderPortal from '../../components/headerPortal/headerPortal'
import LeftSidebar from '../../components/leftSideBar/SideBar'
import style from './home_person_search.module.css'
const MOCK_LINKS = [{ name: 'Cerrar sesión', path: '/vacantes' }]
const LINKS = [
	{ image: icHome, name: 'Inicio', path: '#' },
	{ image: icPerson, name: 'Mi perfil', path: '#' },
	{ image: icLupa, name: 'Buscar trabajo', path: '#' },
	{ image: icText, name: 'Contácta un asesor', path: '#' },
	{ image: icNotes, name: 'Mis portulaciones', path: '/home_person_search' }
]

export default function homePersonSearch() {
	return (
		<div className={style.home_container}>
			<HeaderPortal hasBackground={true} links={MOCK_LINKS} />
			<div className={`${style.main_section} ${style.limit_area}`}>
				<LeftSidebar hasBackground={true} links={LINKS} />
			</div>
			<Footer />
		</div>
	)
}
