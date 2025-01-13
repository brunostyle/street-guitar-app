import { create } from 'zustand';

interface ITheme {
   isLight: boolean;
   changeTheme: (mode: boolean) => void;
}

export const useTheme = create<ITheme>(set => ({
   isLight: false,
   
   changeTheme: (mode) => set({ isLight: mode })
}))