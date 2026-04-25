import { Avatar, AvatarFallback, Label, Description } from "@heroui/react";
import { Flex } from "@styles";
import type { JSX } from "react";

interface IMetric {
    title: string;
    description: string;
    fallback: JSX.Element;
}

export const Metric = ({ title, description, fallback }: IMetric) => (
    <Flex>
        <Avatar color="accent" variant="soft" className="shadow-outset">
            <AvatarFallback>
                {fallback}
            </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
            <Label>{title}</Label>
            <Description>{description}</Description>
        </div>
    </Flex>
);