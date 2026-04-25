import { Description, Separator } from '@heroui/react';
import { Logo } from '@components';
import { Between } from '@styles';

export const Footer = () => (
    <footer>
        <Separator />
        <footer className="container mx-auto px-4 py-3">
            <Between>
                <Logo />
                <Description>©Copyright 2026 Bruno Millalipe</Description>
            </Between>
        </footer>
    </footer>
);