import type { ChipProps } from "@heroui/react";

export const CATEGORIES = [
    { key: 'rock', value: 'Rock' },
    { key: 'folclore', value: 'Folclore' },
    { key: 'pop', value: 'Pop' },
    { key: 'cumbia', value: 'Cumbia' },
    { key: 'otros', value: 'Otros' },
]

export type TValidCategory = 'rock' | 'folclore' | 'pop' | 'cumbia' | 'otros';
export const ValidCategory = ['rock', 'folclore', 'pop', 'cumbia', 'otros'];

export const categories: Record<string, ChipProps["color"]> = {
	rock: 'warning',
	folclore: 'danger',
	pop: 'secondary',
	cumbia: 'default',
	otros: 'success',
}