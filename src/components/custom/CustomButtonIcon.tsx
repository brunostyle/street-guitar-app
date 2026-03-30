import { Button } from "@heroui/react";
import type { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    className?: string;
    isDisabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'danger' | 'danger-soft' | 'ghost' | 'outline' | 'primary' | 'secondary' | 'tertiary';
    onPress?: () => void;
}

export const CustomButtonIcon = ({ children, onPress, className, size = 'sm', variant = 'outline', isDisabled = false }: IButton) => (
    <Button
        isIconOnly
        size={size}
        className={className}
        isDisabled={isDisabled}
        variant={variant}
        onPress={onPress}
    >
        {children}
    </Button>
);