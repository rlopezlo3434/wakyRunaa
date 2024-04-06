import bcrypt from 'bcrypt'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import db from '../../../lib/db'
const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials, req) {
				const userFound = await db.user.findUnique({
					where: {
						email: credentials.email
					}
				})
				console.log(userFound)

				if (!userFound) return null

				const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

				if (!matchPassword) return null

				return {
					id: userFound.id,
					fullname: userFound.fullname,
					name: userFound.name,
					lastName: userFound.lastName,
					email: userFound.email,
					gmail: userFound.gmail
				}
			}
		})
	]
})

export { handler as GET, handler as POST }
