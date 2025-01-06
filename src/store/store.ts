import { create } from 'zustand'

type State = {
    header: {
        isDark: boolean
    }
}

type Action = {
    setIsDark: (isDark: State['header']['isDark']) => void
}

export const useAppStore = create<State & Action>((set) => ({
    header: {
        isDark: true
    },
    setIsDark: (isDark) => set((state) => (
        {
            ...state,
            header: {
                ...state.header,
                isDark
            }
        }
    )),
}))