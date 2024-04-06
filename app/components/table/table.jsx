import styles from './table.module.css'

export default function Table({ children }) {
	return (
		<table className={styles.table}>
			<thead>{children[0]}</thead>
			<tbody>{children[1]}</tbody>
		</table>
	)
}
