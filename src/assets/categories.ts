import type { ChipProps } from "@heroui/react";

export const CATEGORIES = [
    { key: 'rock', value: 'Rock' },
    { key: 'folclore', value: 'Folclore' },
    { key: 'pop', value: 'Pop' },
    { key: 'cumbia', value: 'Cumbia' },
]

export type TValidCategory = 'rock' | 'folclore' | 'pop' | 'cumbia';
export const ValidCategory = ['rock', 'folclore', 'pop', 'cumbia'];

export const categories: Record<string, ChipProps["color"]> = {
	rock: 'warning',
	folclore: 'danger',
	pop: 'secondary',
	cumbia: 'default',
}