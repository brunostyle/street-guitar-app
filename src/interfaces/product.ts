import type { TValidCategory } from "@categories";

export interface IProduct {
	id: string;
	createdAt?: string;
	updatedAt?: string;
	title: string;
	description: string;
	images: string[];
	difficulty: number;
	category: TValidCategory;
	spotify: string;
	price: number;
	tags: string[];
	tab?: string;
	pdf?: string;
}