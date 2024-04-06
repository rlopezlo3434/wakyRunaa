'use client'

import icFolder from '@/public/icons/ic_folder.svg'
import icMira from '@/public/icons/ic_mira.svg'
import icPen from '@/public/icons/ic_pen.svg'
import icPhone from '@/public/icons/ic_phone.svg'
import icPlate from '@/public/icons/ic_plate.svg'
import MainIcon from '@/public/icons/ic_two_person.svg'
import Image from 'next/image'
import { useState } from 'react'
import Button from './components/button/button'
import DropDown from './components/dropdown/dropdown'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import SelectSimple from './components/select-simple/select-simple'
import TextField from './components/textfield/textfield'
import styles from './page.module.css'

const MOCK_LINKS = [
	{ name: 'Vacantes', path: '/vacantes' },
	{ name: 'Blog', path: '/blog' },
	{ name: '¿Quienes somos?', path: '/about' }
	// { name: 'Inicia Sesíon', path: '/signin' }
]

export default function Page() {
	const [value, setValue] = useState('')
	return (
		<div className={styles.home_container}>
			<Header hasBackground={false} links={MOCK_LINKS} onAction={() => openLoginModal()} />
			<div className={`${styles.main_section} ${styles.limit_area}`}>
				<div className={styles.main_section_info}>
					<h1>Recluta con nosotros o encuentra empleo</h1>
					<p>
						Waki Runa es el servicio de <strong>Gestion Humana</strong> que necesitas <br /> para avanzar en el mundo laboral ¡Comienza ahora!
					</p>
					<div className={styles.main_section_btns}>
						<Button w="200px">Busco Personal</Button>
						<Button w="200px">Quiero trabajar</Button>
					</div>
				</div>
				<div className={styles.image_container}>
					<Image className={styles.main_image} priority src={MainIcon} alt="" />
				</div>
			</div>
			<div className={styles.background_benefits_section}>
				<div className={`${styles.benefits_section} ${styles.limit_area}`}>
					<h4 className={styles.title}>Beneficios de trabajar con nosotros</h4>
					<div className={styles.benefits_section_cards}>
						<div className={styles.benefits_section_card}>
							<Image priority src={icFolder} alt="" />
							<span>Reclutamiento</span>
							<p>Encontramos el personal reconocido en su expertis garantizando por la calidad de su trabajo.</p>
						</div>
						<div className={styles.benefits_section_card}>
							<Image priority src={icMira} alt="" />
							<span>Selección</span>
							<p>Te ayudamos con el personal calificado que requieres, obteniendo mejores resultados en menos tiempo.</p>
						</div>
						<div className={styles.benefits_section_card}>
							<Image priority src={icPen} alt="" />
							<span>Capacitación</span>
							<p>Generando una relación de confianza con los postulantes, lo cual se traduce en compromiso y mayor rendimiento laboral.</p>
						</div>
						<div className={styles.benefits_section_card}>
							<Image priority src={icPlate} alt="" />
							<span>Seguimiento</span>
							<p>Generando una relación de confianza con los postulantes, lo cual se traduce en compromiso y mayor rendimiento laboral.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.background_howwork_section}>
				<div className={`${styles.howwork_section} ${styles.limit_area}`}>
					<h4 className={styles.title}>¿Cómo funciona Waki Runa?</h4>
					<span className={styles.subtitle}>Conoce en este video las herramientas y beneficios que Waki Runa tiene para ti</span>
					<div className={styles.howwork_video}></div>
				</div>
			</div>
			<div className={styles.background_contact_section}>
				<div className={`${styles.contact_section} ${styles.limit_area_extra}`}>
					<h4 className={styles.title}>Conversa con nosotros</h4>
					<span className={styles.subtitle}>Déjanos saber como podemos ayudarte</span>
					<div className={styles.contact_section_info}>
						<Image priority className={styles.contact_section_info_img} src={icPhone} alt="" />
						<form className={styles.contact_form}>
							<SelectSimple bg="#ebefff" value={value} onChange={setValue} />
							<TextField variant="ghost" label="Nombre y Apellido *" />
							<TextField variant="ghost" label="Email *" />
							<TextField variant="ghost" label="Telefono *" />
							<TextField variant="ghost" label="Razón Social" />
							<TextField variant="ghost" label="Ruc" />
							<TextField textarea={true} variant="ghost" label="Dejanos tu mensaje" />
							<Button w="240px">Enviar</Button>
						</form>
					</div>
				</div>
			</div>
			<div className={styles.background_faq_section}>
				<div className={`${styles.faq_section} ${styles.limit_area}`}>
					<h4 className={styles.title}>Resuelve tus dudas</h4>
					<DropDown title="Pregunta 1">Texto ficticio para simular la respuesta a la solicitud del cliente con el fin de resolver las dudas</DropDown>
					<DropDown title="Pregunta 2">Texto ficticio para simular la respuesta a la solicitud del cliente con el fin de resolver las dudas</DropDown>
					<DropDown title="Pregunta 3">Texto ficticio para simular la respuesta a la solicitud del cliente con el fin de resolver las dudas</DropDown>
					<DropDown title="Pregunta 4">Texto ficticio para simular la respuesta a la solicitud del cliente con el fin de resolver las dudas</DropDown>
				</div>
			</div>
			<Footer />
		</div>
	)
}
