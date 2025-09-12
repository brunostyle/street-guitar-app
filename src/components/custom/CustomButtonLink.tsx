import { Button } from "@heroui/react";
import { Link } from "react-router";
import type { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    startContent?: ReactNode;
    to: string;
    download?: string;
    isButtonLink?: boolean;
    isDisabled?: boolean;
    fullWidth?: boolean;
    size?: 'sm' | 'md' | 'lg';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    onPress?: () => void;
}

export const CustomButtonLink = ({ children, onPress, to, download, isButtonLink = false, isDisabled = false, size = 'sm', color = 'default', variant = 'bordered', startContent }: IButton) => (
    <Button
        isIconOnly={!isButtonLink}
        isDisabled={isDisabled}
        fullWidth={isButtonLink}
        as={Link}
        to={to}
        download={download}
        target="_blank"
        size={size}
        color={color}
        startContent={startContent}
        variant={variant}
        onPress={onPress}
    >
        {children}
    </Button>
);