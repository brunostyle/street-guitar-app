import type { IProduct } from "./product";

export interface IUserOrder {
   name: string;
   email: string;
   avatar?: string;
}

export interface IOrder {
   id: string;
   user: IUserOrder;
   paid: boolean;
   items: number;
   total: number;
   products: IProduct[];
	createdAt: Date;
}

export interface IOrderCheckout {
   user?: string;
   products: string[];
   paid: boolean;
   items: number;
   total: number;
}