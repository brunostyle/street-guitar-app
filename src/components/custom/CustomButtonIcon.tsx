import { Button } from "@heroui/react";
import type { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    className?: string;
    isDisabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    onPress?: () => void;
}

export const CustomButtonIcon = ({ children, onPress, className, size = 'sm', color = 'default', variant = 'bordered', isDisabled = false }: IButton) => (
    <Button
        isIconOnly
        size={size}
        className={className}
        isDisabled={isDisabled}
        color={color}
        variant={variant}
        onPress={onPress}
    >
        {children}
    </Button>
);