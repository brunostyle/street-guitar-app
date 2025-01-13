import { Divider } from '@nextui-org/react';
import { Logo } from '@components';
import { Between, Subtitle } from '@styles';

export const Footer = () => (
    <footer>
        <Divider className="container mx-auto" />
        <footer className="container mx-auto px-4 py-2">
            <Between>
                <Logo />
                <Subtitle>©Copyright 2024 Bruno Millalipe</Subtitle>
            </Between>
        </footer>
    </footer>
);