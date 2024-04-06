'use client'
import BackPack from '@/public/icons/ic_backpack.svg'
import ComputerPerson from '@/public/icons/ic_computer_person.svg'
import Search from '@/public/icons/ic_magnifying.svg'
import MainIcon from '@/public/icons/ic_meditate_person.svg'
import Image from 'next/image'
import Button from '../components/button/button'
import TextCard from '../components/cardBlog/cardBlog'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Scroll from '../components/scroll-icon/scroll-icon'
import style from './blog.module.css'

const MOCK_LINKS = [
	{ name: 'Vacantes', path: '/vacantes' },
	{ name: 'Blog', path: '/blog' },
	{ name: '¿Quienes somos?', path: '/about' }
	// { name: 'Inicia Sesíon', path: '/signin' }
]

export default function blog() {
	const cardData = [
		{ date: 'Julio 2023', title: 'Título de la primera tarjeta', url: 'https://www.ejemplo1.com' },
		{ date: 'Agosto 2023', title: 'Título de la segunda tarjeta', url: 'https://www.ejemplo2.com' },
		{ date: 'Septiembre 2023', title: 'Título de la tercera tarjeta', url: 'https://www.ejemplo3.com' },
		{ date: 'Octubre 2023', title: 'Título de la cuarta tarjeta', url: 'https://www.ejemplo4.com' },
		{ date: 'Noviembre 2023', title: 'Título de la quinta tarjeta', url: 'https://www.ejemplo5.com' },
		{ date: 'Diciembre 2023', title: 'Título de la sexta tarjeta', url: 'https://www.ejemplo6.com' },
		{ date: 'Enero 2024', title: 'Título de la séptima tarjeta', url: 'https://www.ejemplo7.com' },
		{ date: 'Febrero 2024', title: 'Título de la octava tarjeta', url: 'https://www.ejemplo8.com' },
		{ date: 'Marzo 2024', title: 'Título de la novena tarjeta', url: 'https://www.ejemplo9.com' }
	]
	return (
		<div className={style.home_container}>
			<Header hasBackground={true} links={MOCK_LINKS} />
			<div className={`${style.main_section} ${style.limit_area}`}>
				<div className={style.main_section_info}>
					<h1>Trabajemos juntos en tu crecimiento</h1>
					<p>
						Ofrecemos temas relacionados que podran ayudarte a <br />
						estar en constate actualización que te permitan estar a <br />
						la vanguardia del mercado
					</p>
				</div>
				<div>
					<Image priority src={MainIcon} alt="" />
				</div>
			</div>
			<div className={style.background_benefits_section}>
				<Scroll />
				<div className={style.textCenter}>
					<h2>Escoge el tema de tu interés</h2>
				</div>
				<div className={style.cardGrid}>
					{cardData.map((card, index) => (
						<div key={index} className={style.cardContainer}>
							<TextCard date={card.date} title={card.title} url={card.url} />
						</div>
					))}
				</div>
			</div>
			<div className={style.background_start}>
				<div className={`${style.main_section2} ${style.limit_area2}`}>
					<div className={style.main_section_info2}>
						<p2>
							<strong>¡Comienza ahora!</strong>
						</p2>
						<p>
							<strong>Solicita los servicios que Waki Runa</strong> tiene para ti y escala en el mundo laboral
						</p>
					</div>
					<div className={style.image_cotainer}>
						<Image priority src={ComputerPerson} alt="" />
					</div>
					<div className={style.cardsoption}>
						<div className={style.submain1}>
							<div className={style.subImage}>
								<Image priority src={Search} alt="" />
							</div>
							<div>
								<p2>
									<strong>Busco Personal</strong>
								</p2>
								<p>
									Contáctate con uno de nuestros
									<br />
									asesores para cubrir la vacante
									<br />
									que necesitas en tu empresa
								</p>
								<Button w="200px">Contratar</Button>
							</div>
						</div>
						<div className={style.submain2}>
							<div className={style.subImage}>
								<Image priority src={BackPack} alt="" />
							</div>
							<div>
								<p2>
									<strong>Quiero trabajar</strong>
								</p2>
								<p>
									Mira nuestras vacantes
									<br />
									y da el siguiente paso
									<br />
									en tu carrera
								</p>
								<Button w="200px">Acceder</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
