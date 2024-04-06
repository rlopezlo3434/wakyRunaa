import { create } from 'zustand'

// REGISTER MODE
export const LOOKING_PERSONNEL = 0
export const WANT_TO_WORK = 1

export const registerModalState = {
	isOpen: false,
	registerMode: null,
	step: 0
}

export const useRegisterStore = create()(set => ({
	isOpen: false,
	setStateModal: value => set({ isOpen: value }),

	// main register modal
	isMainOpen: false,
	setMainState: value => set({ isMainOpen: value }),

	registerMode: null,
	setRegisterMode: value => set({ registerMode: value }),
	step: 0,
	setStep: value => set({ step: value })
}))
