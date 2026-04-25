import { useNavigate as useRouter, useLocation } from 'react-router'
import { Formik, Form } from 'formik'
import { IoSearchOutline, IoHomeOutline, IoKeyOutline, IoPersonAddOutline, IoGridOutline, IoPricetagsOutline, IoTriangleOutline, IoExitOutline } from '@icons'
import { CustomButton, CustomInput } from '@components';
import { useCart, useUser } from '@state';
import { ROUTES } from '@navigation';
import type { JSX } from 'react';
import { Gap, Spacer } from '@styles';
import { Separator } from '@heroui/react';

interface ISearch { query: string }
const values: ISearch = { query: '' }

interface IProps {
    setIsMenuOpen: (isOpen: boolean) => void;
}

export const Collapse = ({ setIsMenuOpen }: IProps) => {
    const router = useRouter();
    const { user, isLogged } = useUser();

    const handleSubmit = ({ query }: ISearch) => {
        router(ROUTES.search + query);
    }

    return (
        <div className="min-w-56 max-w-max min-h-screen absolute bg-background backdrop-blur-lg right-0 p-4">
            <div className="block lg:hidden">
                <Formik initialValues={values} onSubmit={handleSubmit}>
                    <Form>
                        <CustomInput name="query" placeholder="Buscar..." icon={<IoSearchOutline />} />
                    </Form>
                </Formik>
                <Spacer />
            </div>

            <Gap>
                <Item text="Inicio" to="/" icon={<IoHomeOutline />} setIsMenuOpen={setIsMenuOpen} />
                {!isLogged && <Item text="Ingresar" to="/auth" icon={<IoKeyOutline />} setIsMenuOpen={setIsMenuOpen} />}
                {isLogged && <Exit setIsMenuOpen={setIsMenuOpen} />}
            </Gap>

            <Spacer />

            {user?.role === "admin" &&
                <Gap>
                    <Separator />
                    <Item text="Dashboard" to={ROUTES.dashboard} icon={<IoGridOutline />} setIsMenuOpen={setIsMenuOpen} />
                    <Item text="Productos" to={ROUTES.products} icon={<IoPricetagsOutline />} setIsMenuOpen={setIsMenuOpen} />
                    <Item text="Ordenes" to={ROUTES.orders} icon={<IoTriangleOutline />} setIsMenuOpen={setIsMenuOpen} />
                    <Item text="Usuarios" to={ROUTES.users} icon={<IoPersonAddOutline />} setIsMenuOpen={setIsMenuOpen} />
                </Gap>
            }
        </div>
    )
};

interface IItem {
    to: string,
    text: string,
    icon: JSX.Element;
    setIsMenuOpen: (isOpen: boolean) => void;
}

export const Item = ({ to, text, icon, setIsMenuOpen }: IItem) => {
    const router = useRouter();
    const location = useLocation();
    return (
        <CustomButton fullWidth className="justify-start" icon={icon} variant={location.pathname === to ? "secondary" : "ghost"} onPress={() => { router(to); setIsMenuOpen(false); }}>
            {text}
        </CustomButton>
    )
}

export const Exit = ({ setIsMenuOpen }: IProps) => {
    const { purgateCart } = useCart();
    const { logout } = useUser();

    const handleLogout = () => {
        logout();
        purgateCart();
    }

    return (
        <CustomButton fullWidth variant="ghost" className="justify-start" icon={<IoExitOutline />} onPress={() => { handleLogout(); setIsMenuOpen(false); }}>Salir</CustomButton>
    )
}