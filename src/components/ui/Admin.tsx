import { BreadcrumbItem, Breadcrumbs, Input, Spacer } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import { Between, SectionTitle } from '@styles';
import { FaPlus, IoMdSearch } from "@icons";
import { CustomButton } from "@components";

interface ILayout {
    children: JSX.Element | JSX.Element[];
    title: string;
    showTitle?: boolean;
    funtional?: boolean;
    isProductPage?: boolean;
}

export const Admin = ({ children, title, showTitle = false, funtional = false, isProductPage }: ILayout) => {
    const router = useNavigate();
    return <>
        <Breadcrumbs>
            <BreadcrumbItem onPress={() => router('/')}>Home</BreadcrumbItem>
            {isProductPage && <BreadcrumbItem onPress={() => router('/admin/products')}>Productos</BreadcrumbItem>}
            <BreadcrumbItem>{title}</BreadcrumbItem>
        </Breadcrumbs>
        {funtional &&
            <div>
                <SectionTitle>{title}</SectionTitle>
                <Spacer y={4} />
                <Between>
                    <Input variant="bordered" size="sm" placeholder="Buscar producto" startContent={<IoMdSearch />} className="w-80 max-w-[50%]" />
                    <CustomButton color="primary" startContent={<FaPlus />} onPress={() => router('/admin/products/new')}>Agregar</CustomButton>
                </Between>
            </div>}
        {showTitle &&
            <Between>
                <SectionTitle>{title}</SectionTitle>
                <Input variant="bordered" size="sm" placeholder={'Buscar ' + title.toLowerCase()} startContent={<IoMdSearch className="text-gray-500 text-small" />} className="w-80 max-w-[50%]" />
            </Between>}
        <div className="overflow-x-scroll overflow-y-hidden">
            {children}
        </div>
    </>
}