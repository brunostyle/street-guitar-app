import { Navbar, Spacer, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarItem, Button } from '@heroui/react';
import { Link as NextLink } from 'react-router-dom'
import { Collapse, Logo, Push, Profile } from '@components';
import { useTheme, useUser } from '@state';
import { Title } from '@styles';
import { FaMoon, IoSunny } from '@icons';

export const MenuAdmin = () => {
   const { isLogged } = useUser();
   const { isLight, changeTheme } = useTheme();
   return (
      <Navbar isBordered maxWidth="full">
         <NavbarBrand>
            <NextLink to="/"><Logo /></NextLink>
            <Spacer x={2} />
            <Title>Street Guitar</Title>
         </NavbarBrand>

         <NavbarContent justify="end">
            <NavbarItem>
               {isLight && <Push><Button isIconOnly variant="light" onPress={() => changeTheme(false)}><FaMoon /></Button></Push>}
               {!isLight && <Push><Button isIconOnly variant="light" onPress={() => changeTheme(true)}><IoSunny /></Button></Push>}
            </NavbarItem>
            <NavbarItem>
               {isLogged && <Profile />}
            </NavbarItem>
            <NavbarMenuToggle />
         </NavbarContent>
         <Collapse />
      </Navbar>
   )
};
