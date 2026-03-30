import { Button, Spinner } from "@heroui/react";
import type { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    className?: string;
    fullWidth?: boolean;
    isLoading?: boolean;
    icon?: ReactNode;
    isDisabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'danger' | 'danger-soft' | 'ghost' | 'outline' | 'primary' | 'secondary' | 'tertiary';
    onPress?: () => void;
}

export const CustomButton = ({ children, onPress, className, type = 'button', size = 'sm', variant = 'primary', fullWidth = false, isLoading = false, isDisabled = false, icon }: IButton) => (
    <Button
        fullWidth={fullWidth}
        className={className}
        isPending={isLoading}
        isDisabled={isDisabled}
        type={type}
        size={size}
        variant={variant}
        onPress={onPress}
    >
        {isLoading ? <Spinner color="current" size="sm" /> : icon}
        {children}
    </Button>
);