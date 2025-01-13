import { BreadcrumbItem, Breadcrumbs, Button, Input, Spacer } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { Between, SectionTitle } from '@styles';
import { AiOutlineHome, AiOutlineTags, FaPlus, IoMdSearch } from "@icons";

interface ILayout {
    children: JSX.Element | JSX.Element[];
    title: string;
    icon?: JSX.Element;
    showTitle?: boolean;
    funtional?: boolean;
    isProductPage?: boolean;
}

export const Admin = ({ children, title, icon, showTitle = false, funtional = false, isProductPage }: ILayout) => {
    const router = useNavigate();
    return <>
        <Breadcrumbs separator="/">
            <BreadcrumbItem onPress={() => router('/')} startContent={<AiOutlineHome />}>Home</BreadcrumbItem>
            {isProductPage && <BreadcrumbItem onPress={() => router('/admin/products')} startContent={<AiOutlineTags />}>Productos</BreadcrumbItem>}
            <BreadcrumbItem startContent={icon}>{title}</BreadcrumbItem>
        </Breadcrumbs>
        {funtional &&
            <div>
                <SectionTitle>{title}</SectionTitle>
                <Spacer y={4} />
                <Between>
                    <Input variant="bordered" size="sm" placeholder="Buscar producto" startContent={<IoMdSearch />} className="w-80 max-w-[50%]" />
                    <Button size="sm" color="primary" startContent={<FaPlus />} onPress={() => router('/admin/products/new')}>Agregar</Button>
                </Between>
            </div>}
        {showTitle &&
            <Between>
                <SectionTitle>{title}</SectionTitle>
                <Input variant="bordered" size="sm" placeholder={'Buscar ' + title.toLowerCase()} startContent={<IoMdSearch />} className="w-80 max-w-[50%]" />
            </Between>}
        <div className="overflow-x-scroll overflow-y-hidden">
            {children}
        </div>
    </>
}