import { Navbar, Dropdown, Spacer, Badge, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from '@nextui-org/react';
import { useNavigate, Link as NextLink } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { IoMdSearch, FiShoppingCart, IoIosMusicalNotes, BiFilter, IoSunny, FaMoon } from '@icons'
import { Collapse, User, InputBordered, Logo, Push } from '@components';
import { searchSchema } from '@validations';
import { useCart, useTheme, useUser } from '@state';
import { Title } from '@styles';

interface ISearch { query: string }
const values: ISearch = { query: '' }

export const Menu = () => {
   const router = useNavigate();
   const { isLight, changeTheme } = useTheme();
   const { items } = useCart();
   const { isLogged } = useUser();
   const handleSubmit = ({ query }: ISearch) => {
      router('/search/' + query);
   }

   return (
      <Navbar isBordered maxWidth="full">
         <NavbarBrand>
            <NextLink to="/"><Logo /></NextLink>
            <Spacer x={2} />
            <Title>Street Guitar</Title>
         </NavbarBrand>

         <NavbarContent justify="end">
            <NavbarItem className="hidden lg:block">
               <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={searchSchema}>
                  <Form>
                     <InputBordered name="query" label="Buscar..." icon={<IoMdSearch />} />
                  </Form>
               </Formik>
            </NavbarItem>

            <NavbarItem>
               <Dropdown>
                  <DropdownTrigger>
                     <Button variant="light" startContent={<BiFilter />}>Filtrar</Button>
                  </DropdownTrigger>
                  <DropdownMenu variant="bordered" aria-label="filtrado de productos" onAction={category => router('/category/' + category)}>
                     <DropdownSection title="Categorias">
                        <DropdownItem key="rock" startContent={<IoIosMusicalNotes />}>Rock</DropdownItem>
                        <DropdownItem key="folclore" startContent={<IoIosMusicalNotes />}>Folclore</DropdownItem>
                        <DropdownItem key="pop" startContent={<IoIosMusicalNotes />}>Pop</DropdownItem>
                     </DropdownSection>
                  </DropdownMenu>
               </Dropdown>
            </NavbarItem>

            <NavbarItem>
               {isLight && <Push><Button isIconOnly variant="light" onPress={() => changeTheme(false)}><FaMoon /></Button></Push>}
               {!isLight && <Push><Button isIconOnly variant="light" onPress={() => changeTheme(true)}><IoSunny /></Button></Push>}
            </NavbarItem>

            <NavbarItem>
               <Badge isInvisible={items === 0} content={items < 10 ? items : "+9"} showOutline={false} color="primary" size="sm" >
                  <Button isIconOnly variant="light" onPress={() => router('/cart')}><FiShoppingCart /></Button>
               </Badge>
            </NavbarItem>

            <NavbarItem>
               {isLogged && <User />}
            </NavbarItem>

            <NavbarMenuToggle />
         </NavbarContent>
         <Collapse />
      </Navbar>
   )
};
