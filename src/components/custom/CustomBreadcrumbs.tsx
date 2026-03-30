import { Breadcrumbs, BreadcrumbsItem } from "@heroui/react"
import { Flex } from "@styles"
import type { JSX } from "react";
import { useNavigate } from "react-router";

interface IBreadcrumbs {
    title: string;
    route: string;
    icon: JSX.Element;
}

interface IProps {
    breadcrumbs: IBreadcrumbs[]
}

export const CustomBreadcrumbs = ({ breadcrumbs }: IProps) => {
    const router = useNavigate();
    return (
        <Breadcrumbs className="mb-2">
            {breadcrumbs.map(breadcrumb => (
                <BreadcrumbsItem key={breadcrumb.title} onPress={() => router(breadcrumb.route)}>
                    <Flex space="gap-2">{breadcrumb.icon}{breadcrumb.title}</Flex>
                </BreadcrumbsItem>
            ))}
        </Breadcrumbs>
    )
}