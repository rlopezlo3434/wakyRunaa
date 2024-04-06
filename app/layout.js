'use client'
import { Montserrat } from 'next/font/google'
import 'react-responsive-modal/styles.css'
import { Providers } from './Providers'
import './global.css'

const interMontserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat'
})

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Providers>
				<body className={interMontserrat.variable}>{children}</body>
			</Providers>
		</html>
	)
}
