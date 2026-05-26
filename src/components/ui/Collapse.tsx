import { useNavigate as useRouter, useLocation } from 'react-router'
import { Formik, Form } from 'formik'
import { IoSearchOutline, IoHomeOutline, IoKeyOutline, IoPersonAddOutline, IoGridOutline, IoPricetagsOutline, IoTriangleOutline, IoExitOutline, IoMenuOutline } from '@icons'
import { CustomButton, CustomButtonIcon, CustomInput } from '@components';
import { useCart, useUser } from '@state';
import { ROUTES } from '@navigation';
import type { JSX } from 'react';
import { Gap } from '@styles';
import { Drawer, DrawerBackdrop, DrawerBody, DrawerContent, DrawerDialog, DrawerHeader, Separator } from '@heroui/react';

interface ISearch { query: string }
const values: ISearch = { query: '' }

export const Collapse = () => {
    const router = useRouter();
    const { user, isLogged } = useUser();

    const handleSubmit = ({ query }: ISearch) => {
        router(ROUTES.search + query);
    }

    return (
        <Drawer>
            <CustomButtonIcon variant="ghost" aria-label="Toggle menu">
                <span>
                    <IoMenuOutline className="size-[1.6em]" />
                </span>
            </CustomButtonIcon>
            <DrawerBackdrop>
                <DrawerContent placement="right">
                    <DrawerDialog className="min-w-56 max-w-max">
                        <DrawerHeader>
                            <div className="block lg:hidden">
                                <Formik initialValues={values} onSubmit={handleSubmit}>
                                    <Form>
                                        <CustomInput name="query" placeholder="Buscar..." icon={<IoSearchOutline />} />
                                    </Form>
                                </Formik> 
                            </div>
                            <Gap>
                                <Item text="Inicio" to="/" icon={<IoHomeOutline />} />
                                {!isLogged && <Item text="Ingresar" to="/auth" icon={<IoKeyOutline />} />}
                                {isLogged && <Exit />}
                            </Gap>
                        </DrawerHeader>
                        <DrawerBody>
                            {user?.role === "admin" &&
                                <Gap>
                                    <Separator />
                                    <Item text="Dashboard" to={ROUTES.dashboard} icon={<IoGridOutline />} />
                                    <Item text="Productos" to={ROUTES.products} icon={<IoPricetagsOutline />} />
                                    <Item text="Ordenes" to={ROUTES.orders} icon={<IoTriangleOutline />} />
                                    <Item text="Usuarios" to={ROUTES.users} icon={<IoPersonAddOutline />} />
                                </Gap>
                            }
                        </DrawerBody>
                    </DrawerDialog>
                </DrawerContent>
            </DrawerBackdrop>
        </Drawer>
    )
};

interface IItem {
    to: string,
    text: string,
    icon: JSX.Element;
}

export const Item = ({ to, text, icon }: IItem) => {
    const router = useRouter();
    const location = useLocation();
    return (
        <CustomButton fullWidth className="justify-start" icon={icon} variant={location.pathname === to ? "secondary" : "ghost"} onPress={() => { router(to) }}>
            {text}
        </CustomButton>
    )
}

export const Exit = () => {
    const { purgateCart } = useCart();
    const { logout } = useUser();

    const handleLogout = () => {
        logout();
        purgateCart();
    }

    return (
        <CustomButton fullWidth variant="ghost" className="justify-start" icon={<IoExitOutline />} onPress={() => { handleLogout() }}>Salir</CustomButton>
    )
}