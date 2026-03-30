import { Description } from "@heroui/react";

interface IProps {
    children: string;
}

export const Divider = ({ children }: IProps) => (
    <div className="flex justify-center items-center">
        <div className="w-full h-px bg-linear-to-r from-transparent to-separator" />
        <Description>{children}</Description>
        <div className="w-full h-px bg-linear-to-l from-transparent to-separator" />
    </div>
)