import { create } from 'zustand';

type TypeTheme = 'light' | 'dark';

interface ITheme {
   theme: TypeTheme;
   changeTheme: (theme: TypeTheme) => void;
}

export const useTheme = create<ITheme>(set => ({
   theme: 'dark',
   changeTheme: (theme: TypeTheme) => set({ theme })
}))