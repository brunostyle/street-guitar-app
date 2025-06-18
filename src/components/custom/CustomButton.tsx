import { Button, Spinner } from "@heroui/react";
import { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    startContent?: ReactNode;
    className?: string;
    fullWidth?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md' | 'lg';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    onPress?: () => void;
}

export const CustomButton = ({ children, onPress, className, type = 'button', size = 'sm', color = 'default', variant = 'solid', fullWidth = false, isLoading = false, isDisabled = false, startContent }: IButton) => (
    <Button
        fullWidth={fullWidth}
        startContent={startContent}
        className={className}
        isLoading={isLoading}
        spinner={<Spinner variant="spinner" color="white" size="sm" />}
        isDisabled={isDisabled}
        type={type}
        size={size}
        color={color}
        variant={variant}
        onPress={onPress}
    >
        {children}
    </Button>
);