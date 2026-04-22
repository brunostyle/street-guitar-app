import { Badge, BadgeAnchor, Button, Dropdown, DropdownItem, DropdownMenu, DropdownPopover, Header, Label, useTheme as useThemeHero } from '@heroui/react';
import { useNavigate } from 'react-router'
import { Formik, Form } from 'formik'
import { IoSearchOutline, IoCartOutline, IoFilterOutline, IoSunnySharp, IoMoonSharp, IoMusicalNoteSharp } from '@icons'
import { Profile, CustomInput, Push, CustomButtonIcon } from '@components';
import { useCart, useTheme, useUser } from '@state';
import { ROUTES } from '@navigation';
import { CATEGORIES } from '@categories';
import { Navbar } from './Navbar';
interface ISearch { query: string }
const values: ISearch = { query: '' }

export const Menu = () => {
   const router = useNavigate();
   const { theme, changeTheme } = useTheme();
   const { setTheme } = useThemeHero();
   const { items } = useCart();
   const { isLogged } = useUser();
   const token = localStorage.getItem('token');
   const handleSubmit = ({ query }: ISearch) => {
      router(ROUTES.search + query);
   }

   return (
      <Navbar>
         <div className="hidden lg:block">
            <Formik initialValues={values} onSubmit={handleSubmit}>
               <Form>
                  <CustomInput name="query" placeholder="Buscar..." icon={<IoSearchOutline />} />
               </Form>
            </Formik>
         </div>

         <Dropdown>
            <Button variant="ghost" size="sm"><IoFilterOutline />Filtrar</Button>
            <DropdownPopover>
               <DropdownMenu aria-label="filtrado de productos" onAction={category => router(ROUTES.category + category)}>
                  <Header>Categorias</Header>
                  {CATEGORIES.map(category => (
                     <DropdownItem key={category.key} id={category.key}>
                        <IoMusicalNoteSharp />
                        <Label>{category.value}</Label>
                     </DropdownItem>
                  ))}
               </DropdownMenu>
            </DropdownPopover>
         </Dropdown>

         <div>
            {theme === 'light' && <Push><CustomButtonIcon variant="ghost" onPress={() => { changeTheme('dark'); setTheme('dark') }}><IoMoonSharp /></CustomButtonIcon></Push>}
            {theme === 'dark' && <Push><CustomButtonIcon variant="ghost" onPress={() => { changeTheme('light'); setTheme('light') }}><IoSunnySharp /></CustomButtonIcon></Push>}
         </div>

         <BadgeAnchor>
            <CustomButtonIcon variant="ghost" onPress={() => router(ROUTES.cart)}><IoCartOutline /></CustomButtonIcon>
            {items !== 0 && <Badge color="accent" size="sm">{items < 10 ? items : "+9"}</Badge>}
         </BadgeAnchor>

         <div>
            {(token || isLogged) && <Profile />}
         </div>
      </Navbar>
   )
};