'use client'
import icArrowDown from '@/public/icons/ic_arrow_down.svg'
import Image from 'next/image'
import { useState } from 'react'
import styles from './select-simple.module.css'

const MOCK_OPTIONS = [
	{ id: 1, value: 'valor 1' },
	{ id: 2, value: 'valor 2' }
]

export default function SelectSimple({ options = MOCK_OPTIONS, value = '', onChange, bg = '#fff', w }) {
	const [focus, setFocus] = useState(false)

	const customStyles = {
		backgroundColor: bg
	}

	const handleBlur = e => {
		const currentTarget = e.currentTarget
		setTimeout(() => {
			if (!currentTarget.contains(document.activeElement)) {
				setFocus(false)
			}
		}, 0)
	}

	const onClick = id => {
		const option = options.find(option => option.id === id)
		onChange(option.id)
		setFocus(false)
	}

	return (
		<label
			className={styles.select_label}
			style={{
				maxWidth: w ?? '100%'
			}}
		>
			<div tabIndex="1" onBlur={handleBlur} placeholder=" " className={styles.select_input} onClick={() => setFocus(true)}>
				{options.find(option => option.id === value)?.value || ''}
			</div>
			<span tabIndex="1" style={customStyles} onBlur={handleBlur} onClick={() => setFocus(true)} className={`${styles.select_placeholder} ${value !== '' && styles.focus} `}>
				Selecciona un tema
			</span>
			<Image className={`${styles.select_arrow} ${focus && styles.rotate}`} priority src={icArrowDown} alt="" />

			<div style={customStyles} className={`${styles.options} ${focus && styles.opacity} `}>
				{options.map((option, index) => (
					<span onClick={() => onClick(option.id)} key={index}>
						{option.value}
					</span>
				))}
			</div>
		</label>
	)
}
