import { BreadcrumbItem, Breadcrumbs, Input } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import { Between, Gap, SectionTitle } from '@styles';
import { IoAddOutline, IoHomeOutline, IoPricetagsOutline, IoSearchOutline } from "@icons";
import { CustomButton } from "@components";

interface ILayout {
    children: JSX.Element | JSX.Element[];
    title: string;
    icon: JSX.Element;
    show?: 'nothing' | 'extra-breadcrumb' | 'title-input' | 'title-input-button';
}

export const Admin = ({ children, title, icon, show = 'nothing' }: ILayout) => {
    const router = useNavigate();
    return <>
        <Breadcrumbs>
            <BreadcrumbItem startContent={<IoHomeOutline />} onPress={() => router('/')}>Home</BreadcrumbItem>
            {show === "extra-breadcrumb" && <BreadcrumbItem startContent={<IoPricetagsOutline />} onPress={() => router('/admin/products')}>Productos</BreadcrumbItem>}
            <BreadcrumbItem startContent={icon}>{title}</BreadcrumbItem>
        </Breadcrumbs>
        {show === "title-input" &&
            <Between>
                <SectionTitle>{title}</SectionTitle>
                <Input variant="bordered" size="sm" placeholder={'Buscar ' + title.toLowerCase()} startContent={<IoSearchOutline className="text-gray-500 text-small" />} className="w-80 max-w-[50%]" />
            </Between>
        }
        {show === "title-input-button" &&
            <Gap>
                <SectionTitle>{title}</SectionTitle>
                <Between>
                    <Input variant="bordered" size="sm" placeholder={'Buscar ' + title.toLowerCase()} startContent={<IoSearchOutline className="text-gray-500 text-small" />} className="w-80 max-w-[50%]" />
                    <CustomButton color="primary" startContent={<IoAddOutline />} onPress={() => router('/admin/products/new')}>Agregar</CustomButton>
                </Between>
            </Gap>
        }
        <div className="overflow-x-scroll overflow-y-hidden">
            {children}
        </div>
    </>
}