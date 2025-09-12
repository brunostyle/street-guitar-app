import { NavbarMenuItem, NavbarMenu } from '@heroui/react';
import { useNavigate as useRouter, useLocation } from 'react-router'
import { Formik, Form } from 'formik'
import { IoSearchOutline, IoHomeOutline, IoKeyOutline, IoPersonAddOutline, IoGridOutline, IoPricetagsOutline, IoTriangleOutline, IoExitOutline } from '@icons'
import { CustomButton, CustomInputBordered, Separator } from '@components';
import { searchSchema } from '@validations';
import { useCart, useUser } from '@state';
import { ROUTES } from '@navigation';
import type { JSX } from 'react';

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
      <NavbarMenu className="min-w-56 max-w-max left-auto">
         <NavbarMenuItem className="lg:hidden">
            <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={searchSchema}>
               <Form>
                  <CustomInputBordered name="query" label="Buscar..." icon={<IoSearchOutline />} />
               </Form>
            </Formik>
         </NavbarMenuItem>

         <NavbarMenuItem>
            <Separator>Menu</Separator>
         </NavbarMenuItem>

         <Item text="Inicio" to="/" icon={<IoHomeOutline />} setIsMenuOpen={setIsMenuOpen} />
         {!isLogged && <Item text="Ingresar" to="/auth" icon={<IoKeyOutline />} setIsMenuOpen={setIsMenuOpen} />}
         {isLogged && <Exit setIsMenuOpen={setIsMenuOpen} />}

         {user?.role === "admin" &&
            <>
               <NavbarMenuItem>
                  <Separator>Administración</Separator>
               </NavbarMenuItem>
               <Item text="Dashboard" to={ROUTES.dashboard} icon={<IoGridOutline />} setIsMenuOpen={setIsMenuOpen} />
               <Item text="Productos" to={ROUTES.products} icon={<IoPricetagsOutline />} setIsMenuOpen={setIsMenuOpen} />
               <Item text="Ordenes" to={ROUTES.orders} icon={<IoTriangleOutline />} setIsMenuOpen={setIsMenuOpen} />
               <Item text="Usuarios" to={ROUTES.users} icon={<IoPersonAddOutline />} setIsMenuOpen={setIsMenuOpen} />
            </>
         }
      </NavbarMenu>
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
      <NavbarMenuItem>
         <CustomButton fullWidth color={location.pathname === to ? "primary" : "default"} className="justify-start" startContent={icon} variant={location.pathname === to ? "flat" : "light"} onPress={() => { router(to); setIsMenuOpen(false); }}>
            {text}
         </CustomButton>
      </NavbarMenuItem>
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
      <NavbarMenuItem>
         <CustomButton fullWidth variant="light" className="justify-start" startContent={<IoExitOutline />} onPress={() => { handleLogout(); setIsMenuOpen(false); }}>Salir</CustomButton>
      </NavbarMenuItem>
   )
}