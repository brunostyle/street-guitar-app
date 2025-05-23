import { Divider, NavbarMenuItem, NavbarMenu } from '@heroui/react';
import { useNavigate as useRouter, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { IoSearchOutline, IoHomeOutline, IoKeyOutline, IoPersonAddOutline, IoGridOutline, IoPricetagsOutline, IoTriangleOutline, IoExitOutline } from '@icons'
import { CustomButton, CustomInputBordered } from '@components';
import { Subtitle } from '@styles';
import { searchSchema } from '@validations';
import { useCart, useUser } from '@state';

interface ISearch { query: string }
const values: ISearch = { query: '' }

interface IProps {
   setIsMenuOpen: (isOpen: boolean) => void;
}

export const Collapse = ({ setIsMenuOpen }: IProps) => {
   const router = useRouter();
   const { user, isLogged } = useUser();

   const handleSubmit = ({ query }: ISearch) => {
      router('/search/' + query);
   }

   return (
      <NavbarMenu className="min-w-52 max-w-max left-auto">
         <NavbarMenuItem className="lg:hidden">
            <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={searchSchema}>
               <Form>
                  <CustomInputBordered name="query" label="Buscar..." icon={<IoSearchOutline />} />
               </Form>
            </Formik>
         </NavbarMenuItem>

         <Divisor text="Menu" />
         <Item text="Inicio" to="/" icon={<IoHomeOutline />} setIsMenuOpen={setIsMenuOpen} />
         {!isLogged && <Item text="Ingresar" to="/auth/login" icon={<IoKeyOutline />} setIsMenuOpen={setIsMenuOpen} />}
         {isLogged && <Exit setIsMenuOpen={setIsMenuOpen} />}

         {user?.role === "admin" &&
            <>
               <Divisor text="Administración" />
               <Item text="Dashboard" to="/admin" icon={<IoGridOutline />} setIsMenuOpen={setIsMenuOpen} />
               <Item text="Productos" to="/admin/products" icon={<IoPricetagsOutline />} setIsMenuOpen={setIsMenuOpen} />
               <Item text="Ordenes" to="/admin/orders" icon={<IoTriangleOutline />} setIsMenuOpen={setIsMenuOpen} />
               <Item text="Usuarios" to="/admin/users" icon={<IoPersonAddOutline />} setIsMenuOpen={setIsMenuOpen} />
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

export const Divisor = ({ text }: { text: string }) => (
   <NavbarMenuItem>
      <Subtitle>{text}</Subtitle>
      <Divider />
   </NavbarMenuItem>
)

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