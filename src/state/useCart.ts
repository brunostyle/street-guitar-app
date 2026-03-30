import { create } from 'zustand';
import type { IProduct } from "@interfaces"
import { notify } from '@components';

interface ICart {
   cart: IProduct[];
   total: number;
   items: number;
   addProductToCart: (product: IProduct) => void;
   removeProductToCart: (product: IProduct) => void;
   purgateCart: () => void;
}

export const useCart = create<ICart>((set, get) => ({
   cart: [],
   total: 0,
   items: 0,
   addProductToCart: product => {
      if (get().cart.find(p => p.id === product.id)) return;
      notify.success('Producto añadido al carrito');
      set(state => ({
         cart: [...state.cart, product],
         total: state.total + product.price,
         items: get().items + 1
      }))
   },

   removeProductToCart: product => set(state => ({
      cart: state.cart.filter(p => p.id !== product.id),
      total: state.total - product.price,
      items: get().items - 1
   })),

   purgateCart: () => set({
      cart: [],
      total: 0,
      items: 0
   })
}))