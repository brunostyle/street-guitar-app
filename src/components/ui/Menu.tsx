import { Navbar, Dropdown, Spacer, Badge, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from '@heroui/react';
import { useNavigate, Link as NextLink } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { IoSearchOutline, IoCartOutline, IoFilterOutline, IoSunnySharp, IoMoonSharp, IoMusicalNotesSharp } from '@icons'
import { Collapse, Profile, CustomInputBordered, Logo, Push, CustomButtonIcon } from '@components';
import { searchSchema } from '@validations';
import { useCart, useTheme } from '@state';
import { Title } from '@styles';
import { useState } from 'react';

interface ISearch { query: string }
const values: ISearch = { query: '' }

export const Menu = () => {
   const router = useNavigate();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { theme, changeTheme } = useTheme();
   const { items } = useCart();
   const token = localStorage.getItem('token');
   const handleSubmit = ({ query }: ISearch) => {
      router('/search/' + query);
   }

   return (
      <Navbar isBordered maxWidth="full" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
         <NavbarBrand>
            <NextLink to="/"><Logo /></NextLink>
            <Spacer x={3} />
            <Title>Street Guitar</Title>
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
                  <DropdownMenu variant="bordered" aria-label="filtrado de productos" onAction={category => router('/category/' + category)}>
                     <DropdownSection title="Categorias">
                        <DropdownItem key="rock" startContent={<IoMusicalNotesSharp />}>Rock</DropdownItem>
                        <DropdownItem key="folclore" startContent={<IoMusicalNotesSharp />}>Folclore</DropdownItem>
                        <DropdownItem key="pop" startContent={<IoMusicalNotesSharp />}>Pop</DropdownItem>
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
                  <CustomButtonIcon variant="light" onPress={() => router('/cart')}><IoCartOutline /></CustomButtonIcon>
               </Badge>
            </NavbarItem>

            <NavbarItem>
               {token && <Profile />}
            </NavbarItem>

            <NavbarMenuToggle />
         </NavbarContent>
         <Collapse setIsMenuOpen={setIsMenuOpen} />
      </Navbar>
   )
};