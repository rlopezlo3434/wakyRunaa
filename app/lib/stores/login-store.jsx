import { create } from 'zustand'

export const loginModalState = {
	isOpen: false,
	isOpenStepOne: false
}

export const useLoginStore = create()(set => ({
	isOpen: false,
	setLoginState: value => set({ isOpen: value }),
	isOpenStepOne: false,
	setStepOneState: value => set({ isOpenStepOne: value }),
	isOpenRecoverPassword: false,
	setRecoverPasswordState: value => set({ isOpenRecoverPassword: value })
}))
