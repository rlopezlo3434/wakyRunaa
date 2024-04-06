import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'
import db from '../../../lib/db'
export async function POST(request) {
	try {
		const data = await request.json()
		const userFound = await db.user.findUnique({
			where: { email: data.email }
		})

		if (userFound) {
			return NextResponse.json(
				{
					message: 'Email already exists'
				},
				{
					status: 400
				}
			)
		}
		if (data.gmail === 1) {
			const newUser = await db.user.create({
				data: {
					fullname: data.fullname,
					email: data.email,
					gmail: data.gmail
				}
			})
			console.log('Nuevo usuario registrado:', newUser)

			const { password: _, ...user } = newUser

			return NextResponse.json(user)
		} else {
			const hashedPassword = await bcrypt.hash(data.password, 10)
			const newUser = await db.user.create({
				data: {
					name: data.name,
					lastName: data.lastName,
					email: data.email,
					password: hashedPassword
				}
			})

			const { password: _, ...user } = newUser
			return NextResponse.json(user)
		}
	} catch (error) {
		return NextResponse.json(
			{
				message: error.message
			},
			{
				status: 500
			}
		)
	}
}
