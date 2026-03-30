import { Input } from '@heroui/react';
import { useNavigate } from 'react-router';
import { Between, Gap, SectionTitle } from '@styles';
import { IoAddOutline, IoHomeOutline, IoPricetagsOutline } from "@icons";
import { CustomBreadcrumbs, CustomButton } from "@components";
import { ROUTES } from '@navigation';
import type { JSX } from 'react';

interface ILayout {
    children: JSX.Element | JSX.Element[];
    title: string;
    icon: JSX.Element;
    show?: 'nothing' | 'extra-breadcrumb' | 'title-input' | 'title-input-button';
}

export const Admin = ({ children, title, icon, show = 'nothing' }: ILayout) => {
    const router = useNavigate();
    const breadcrumbs = [
        { title: 'Home', route: ROUTES.home, icon: <IoHomeOutline /> },
        ...(show === "extra-breadcrumb" ? [{ title: 'Productos', route: ROUTES.products, icon: <IoPricetagsOutline /> }] : []),
        { title: title, route: '', icon: icon },
    ]

    return <>
        <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
        {show === "title-input" &&
            <Between>
                <SectionTitle>{title}</SectionTitle>
                <Input placeholder={'Buscar ' + title.toLowerCase()} />
            </Between>
        }
        {show === "title-input-button" &&
            <Gap>
                <SectionTitle>{title}</SectionTitle>
                <Between>
                    <Input placeholder={'Buscar ' + title.toLowerCase()} />
                    <CustomButton icon={<IoAddOutline />} onPress={() => router(ROUTES.newProduct)}>Agregar</CustomButton>
                </Between>
            </Gap>
        }
        <div className="overflow-x-scroll overflow-y-hidden">
            {children}
        </div>
    </>
}