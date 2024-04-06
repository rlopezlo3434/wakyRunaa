import { useState } from 'react'
import Button from '../button/button'
import SelectSimple from '../select-simple/select-simple'
import styles from './base-table-filter.module.css'

export default function BaseTableFilter() {
	const [salary, setSalary] = useState('')
	const [state, setState] = useState('')

	const onReset = () => {
		setSalary('')
		setState('')
	}

	return (
		<div className={styles.base_table_main}>
			<div className={styles.baseTable}>
				<SelectSimple w={'210px'} value={salary} onChange={setSalary} />
				<SelectSimple w={'210px'} value={state} onChange={setState} />
				<Button w={'95px'} variant="secondary">
					Filtrar
				</Button>
				<span onClick={onReset} className={styles.basetableCleanFilter}>
					Limpiar filtro
				</span>
			</div>
		</div>
	)
}
