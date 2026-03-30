import { Separator } from '@heroui/react';
import { Logo } from '@components';
import { Between, Subtitle } from '@styles';

export const Footer = () => (
    <footer>
        <Separator />
        <footer className="container mx-auto px-4 py-3">
            <Between>
                <Logo />
                <Subtitle>©Copyright 2026 Bruno Millalipe</Subtitle>
            </Between>
        </footer>
    </footer>
);