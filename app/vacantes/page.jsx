'use client'
import icGraphPerson from '@/public/icons/ic_graph_person.svg'
import Image from 'next/image'
import Button from '../components/button/button'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Scroll from '../components/scroll-icon/scroll-icon'
import BaseTableFilter from '../components/table-filter/base-table-filter'
import Table from '../components/table/table'
import styles from './vacantes.module.css'
const MOCK_LINKS = [
	{ name: 'Vacantes', path: '/vacantes' },
	{ name: 'Blog', path: '/blog' },
	{ name: '¿Quienes somos?', path: '/about' }
	// { name: 'Inicia Sesíon', path: '/signin' }
]

export default function Vacantes() {
	let Head = () => {
		return (
			<tr>
				<th>Nombre</th>
				<th>Sector</th>
				<th>Regíon</th>
				<th>Salario</th>
				<th>Años exp.</th>
				<th></th>
			</tr>
		)
	}

	let Body = () => {
		return (
			<tr>
				<td>Contador</td>
				<td>Minero</td>
				<td>san miguel</td>
				<td>1700</td>
				<td>7</td>
				<td>
					<div style={{ display: 'flex', gap: '20px' }}>
						<Button mini variant="secondary">
							Postular
						</Button>
						<a>Compartir</a>
					</div>
				</td>
			</tr>
		)
	}

	return (
		<div>
			<Header hasBackground={true} links={MOCK_LINKS} />
			<div className={styles.background_main_section}>
				<div className={`${styles.limit_area} ${styles.main_section}`}>
					<h1>¿Estás listo para asumir una posición Especializada en tu carrera?</h1>
					<Image priority src={icGraphPerson} alt="" />
				</div>
			</div>
			<div className={styles.vacantes_body}>
				<Scroll />
				<h2 className={styles.title}>Buscar vacantes disponibles</h2>
				<div className={styles.table}>
					<BaseTableFilter />
					<Table>
						<Head />
						<Body />
					</Table>
				</div>
			</div>
			<Footer />
		</div>
	)
}
