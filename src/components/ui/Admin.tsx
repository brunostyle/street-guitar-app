import { BreadcrumbItem, Breadcrumbs, Input, Spacer } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import { Between, SectionTitle } from '@styles';
import { IoAddOutline, IoHomeOutline, IoPricetagsOutline, IoSearchOutline } from "@icons";
import { CustomButton } from "@components";

interface ILayout {
    children: JSX.Element | JSX.Element[];
    title: string;
    showTitle?: boolean;
    funtional?: boolean;
    isProductPage?: boolean;
    icon: JSX.Element;
}

export const Admin = ({ children, title, showTitle = false, funtional = false, isProductPage, icon }: ILayout) => {
    const router = useNavigate();
    return <>
        <Breadcrumbs>
            <BreadcrumbItem startContent={<IoHomeOutline />} onPress={() => router('/')}>Home</BreadcrumbItem>
            {isProductPage && <BreadcrumbItem startContent={<IoPricetagsOutline />} onPress={() => router('/admin/products')}>Productos</BreadcrumbItem>}
            <BreadcrumbItem startContent={icon}>{title}</BreadcrumbItem>
        </Breadcrumbs>
        {funtional &&
            <div>
                <SectionTitle>{title}</SectionTitle>
                <Spacer y={4} />
                <Between>
                    <Input variant="bordered" size="sm" placeholder="Buscar producto" startContent={<IoSearchOutline />} className="w-80 max-w-[50%]" />
                    <CustomButton color="primary" startContent={<IoAddOutline />} onPress={() => router('/admin/products/new')}>Agregar</CustomButton>
                </Between>
            </div>}
        {showTitle &&
            <Between>
                <SectionTitle>{title}</SectionTitle>
                <Input variant="bordered" size="sm" placeholder={'Buscar ' + title.toLowerCase()} startContent={<IoSearchOutline className="text-gray-500 text-small" />} className="w-80 max-w-[50%]" />
            </Between>}
        <div className="overflow-x-scroll overflow-y-hidden">
            {children}
        </div>
    </>
}