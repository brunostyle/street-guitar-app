import type { TValidCategory } from "@categories";

export interface IProduct {
	id: string;
	createdAt?: string;
	updatedAt?: string;
	title: string;
	description: string;
	image?: string;
	thumbnail?: string;
	difficulty: number;
	category: TValidCategory;
	spotify: string;
	price: number;
	tags: string[];
	tab?: string;
	pdf?: string;
	tuning: {
		label: string,
		notes: {
			first: number;
			second: number;
			third: number;
			fourth: number;
			fifth: number;
			sixth: number;
		}
	}
}