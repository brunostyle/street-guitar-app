import type { ChipProps } from "@heroui/react";

export const CATEGORIES = [
    { key: 'rock', value: 'Rock' },
    { key: 'folclore', value: 'Folclore' },
    { key: 'pop', value: 'Pop' },
    { key: 'cumbia', value: 'Cumbia' },
    { key: 'romantico', value: 'Romantico' },
    { key: 'otros', value: 'Otros' },
]

export type TValidCategory = 'rock' | 'folclore' | 'pop' | 'cumbia' | 'romantico' | 'otros' ;
export const ValidCategory = ['rock', 'folclore', 'pop', 'cumbia', 'romantico', 'otros'];

export const categories: Record<string, ChipProps["color"]> = {
	rock: 'warning',
	folclore: 'danger',
	pop: 'secondary',
	cumbia: 'default',
	romantico: 'success',
	otros: 'primary',
}