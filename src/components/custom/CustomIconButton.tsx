import { Button } from "@heroui/react";
import { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    onPress?: () => void;
}

export const CustomIconButton = ({ children, onPress, size = 'sm', color = 'default', variant = 'bordered' }: IButton) => (
    <Button
        isIconOnly
        size={size}
        color={color}
        variant={variant}
        onPress={onPress}
    >
        {children}
    </Button>
);