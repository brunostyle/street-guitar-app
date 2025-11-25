import { Navbar, Dropdown, Badge, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from '@heroui/react';
import { useNavigate, Link as NextLink } from 'react-router'
import { Formik, Form } from 'formik'
import { IoSearchOutline, IoCartOutline, IoFilterOutline, IoSunnySharp, IoMoonSharp, IoMusicalNoteSharp } from '@icons'
import { Collapse, Profile, CustomInputBordered, Logo, Push, CustomButtonIcon } from '@components';
import { searchSchema } from '@validations';
import { useCart, useTheme, useUser } from '@state';
import { Flex, Title } from '@styles';
import { useState } from 'react';
import { ROUTES } from '@navigation';
import { CATEGORIES } from '@categories';

interface ISearch { query: string }
const values: ISearch = { query: '' }

export const Menu = () => {
   const router = useNavigate();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { theme, changeTheme } = useTheme();
   const { items } = useCart();
   const { isLogged } = useUser();
   const token = localStorage.getItem('token');
   const handleSubmit = ({ query }: ISearch) => {
      router(ROUTES.search + query);
   }

   return (
      <Navbar isBordered maxWidth="full" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
         <NavbarBrand>
            <Flex>
               <NextLink to={ROUTES.home}><Logo /></NextLink>
               <Title>Street Guitar</Title>
            </Flex>
         </NavbarBrand>

         <NavbarContent justify="end">
            <NavbarItem className="hidden lg:block">
               <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={searchSchema}>
                  <Form>
                     <CustomInputBordered name="query" label="Buscar..." icon={<IoSearchOutline />} />
                  </Form>
               </Formik>
            </NavbarItem>

            <NavbarItem>
               <Dropdown>
                  <DropdownTrigger>
                     <Button variant="light" size="sm" startContent={<IoFilterOutline />}>Filtrar</Button>
                  </DropdownTrigger>
                  <DropdownMenu variant="flat" aria-label="filtrado de productos" onAction={category => router(ROUTES.category + category)}>
                     <DropdownSection title="Categorias">
                        {CATEGORIES.map(category => (
                           <DropdownItem key={category.key} startContent={<IoMusicalNoteSharp />}>{category.value}</DropdownItem>
                        ))}
                     </DropdownSection>
                  </DropdownMenu>
               </Dropdown>
            </NavbarItem>

            <NavbarItem>
               {theme === 'light' && <Push><CustomButtonIcon variant="light" onPress={() => changeTheme('dark')}><IoMoonSharp /></CustomButtonIcon></Push>}
               {theme === 'dark' && <Push><CustomButtonIcon variant="light" onPress={() => changeTheme('light')}><IoSunnySharp /></CustomButtonIcon></Push>}
            </NavbarItem>

            <NavbarItem>
               <Badge isInvisible={items === 0} content={items < 10 ? items : "+9"} showOutline={false} color="primary" size="sm" shape="circle">
                  <CustomButtonIcon variant="light" onPress={() => router(ROUTES.cart)}><IoCartOutline /></CustomButtonIcon>
               </Badge>
            </NavbarItem>

            <NavbarItem>
               {(token || isLogged) && <Profile />}
            </NavbarItem>

            <NavbarMenuToggle className="cursor-pointer" />
         </NavbarContent>
         <Collapse setIsMenuOpen={setIsMenuOpen} />
      </Navbar>
   )
};