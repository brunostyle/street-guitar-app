import type { ChipProps } from "@heroui/react";

export type TValidCategory = 'rock' | 'folclore' | 'pop';
export const ValidCategory = ['rock', 'folclore', 'pop'];

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

export const categoriesObject = {
	rock: "Rock",
	folclore: "Folclore",
	pop: "Pop",
}

export const categories: Record<string, ChipProps["color"]> = {
	rock: 'warning',
	folclore: 'danger',
	pop: 'secondary',
}