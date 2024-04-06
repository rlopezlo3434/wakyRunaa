'use client'
import BackPack from './../../public/icons/ic_backpack.svg'

// import BackPack from '@/public/icons/ic_backpack.svg'
import ComputerPerson from '@/public/icons/ic_computer_person.svg'
import BookPerson from './../../public/icons/ic_book_person.svg'

import Focus from '@/public/icons/ic_focus.svg'
import Graph from '@/public/icons/ic_graph.svg'
import Search from '@/public/icons/ic_magnifying.svg'
import Button from '../components/button/button'

import Heart from '@/public/icons/ic_heart.svg'
import Like from '@/public/icons/ic_like.svg'
import MiraDark from '@/public/icons/ic_mira_dark.svg'
import Plate from '@/public/icons/ic_plate_dark.svg'
import Image from 'next/image'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Scroll from '../components/scroll-icon/scroll-icon'
import TextLine from '../components/textLine/textLine'
import style from './about.module.css'

const MOCK_LINKS = [
	{ name: 'Vacantes', path: '/vacantes' },
	{ name: 'Blog', path: '/blog' },
	{ name: '¿Quienes somos?', path: '/about' }
	// { name: 'Inicia Sesíon', path: '/signin' }
]

export default function About() {
	const cardData = [
		{ image: Graph, title: 'Gestión orientada a nuestros <br /> Clientes y Postulantes', url: 'https://www.ejemplo1.com' },
		{ image: Heart, image: Heart, title: 'Pasión por lo que hacemos para lograr <br /> nuestras metas con nuestros clientes', url: 'https://www.ejemplo6.com' },
		{ image: Plate, title: 'Calidad para generar valor en cada <br /> uno de nuestros clientes', url: 'https://www.ejemplo2.com' },
		{ image: Focus, title: 'Innovación en nuevas herramientas y<br /> buenas prácticas de trabajo', url: 'https://www.ejemplo4.com' },
		{ image: MiraDark, title: 'Compromiso en la busqueda de la <br />excelencia y mejora continua', url: 'https://www.ejemplo3.com' },
		{ image: Like, title: 'Ética y Responsabilidad basado el <br />respeto, la igualdad y la confianza.', url: 'https://www.ejemplo5.com' }
	]
	return (
		<div className={style.home_container}>
			<Header hasBackground={true} links={MOCK_LINKS} />
			<div className={`${style.main_section} ${style.limit_area}`}>
				<div className={style.main_section_info}>
					<p3>
						Waki Runa Recluta,
						<br />
						selecciona y capacita
					</p3>
					<p>
						<strong>Ofrecemos tiempo, calidad y precio. </strong>Encontrando y garantizando
						<br />
						personal reconocido por la calidad de su trabajo y la agilidad de nuestro <br />
						proceso, que contribuye con el éxito de nuestros clientes.
					</p>
				</div>
				<div>
					<Image priority src={BookPerson} alt="" />
				</div>
			</div>
			<div className={style.background_benefits_section}>
				<Scroll />
				<div className={style.textCenter}>
					<p>Nuestros pilares de especialización</p>
					<p2>conoce un poco más sobre la satisfacción de quienes trabajan con nosotros</p2>
				</div>
				<div className={style.cardGrid}>
					{cardData.map((card, index) => (
						<div key={index} className={style.cardContainer}>
							<TextLine image={card.image} title={card.title} />
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
