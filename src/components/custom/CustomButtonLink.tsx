import { Button } from "@heroui/react";
import { Link } from "react-router";
import type { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    icon?: ReactNode;
    to: string;
    download?: string;
    isButtonLink?: boolean;
    className?: string;
    isDisabled?: boolean;
    fullWidth?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'danger' | 'danger-soft' | 'ghost' | 'outline' | 'primary' | 'secondary' | 'tertiary';
    onPress?: () => void;
}

export const CustomButtonLink = ({ children, onPress, to, download, isButtonLink = false, isDisabled = false, size = 'sm', variant = 'outline', icon, className }: IButton) => (
    <Link to={to} target="_blank" download={download}>
        <Button
            isIconOnly={!isButtonLink}
            isDisabled={isDisabled}
            fullWidth={isButtonLink}
            size={size}
            className={className}
            variant={variant}
            onPress={onPress}
        >
            {icon}
            {children}
        </Button>
    </Link>
);