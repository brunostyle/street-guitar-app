import { create } from 'zustand';
import { IAuth } from '@interfaces';

interface IUser {
   isLogged: boolean;
   user?: IAuth;
   login: (user?: IAuth) => void;
   logout: () => void;
}

export const useUser = create<IUser>(set => ({
   isLogged: false,
   user: undefined,
   // isLogged: true,
   // user: {
   //    id: '677b9159137ee5cf08e0d370',
   //    name: 'Bruno',
   //    email: 'bruno@gmail.com',
   //    role: 'admin'
   // },
   login: user => set({ isLogged: true, user }),
   logout: async () => {
      set({ isLogged: false, user: undefined })
      localStorage.removeItem('token');
   }
}))