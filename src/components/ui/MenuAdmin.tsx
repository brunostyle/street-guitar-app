import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarItem } from '@heroui/react';
import { Link as NextLink } from 'react-router'
import { Collapse, Logo, Push, Profile, CustomButtonIcon } from '@components';
import { useTheme, useUser } from '@state';
import { Flex, Title } from '@styles';
import { IoMoonSharp, IoSunnySharp } from '@icons';
import { useState } from 'react';
import { ROUTES } from '@navigation';

export const MenuAdmin = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { isLogged } = useUser();
   const { theme, changeTheme } = useTheme();
   return (
      <Navbar isBordered maxWidth="full" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
         <NavbarBrand>
            <Flex>
               <NextLink to={ROUTES.home}><Logo /></NextLink>
               <Title>Street Guitar</Title>
            </Flex>
         </NavbarBrand>

         <NavbarContent justify="end">
            <NavbarItem>
               {theme === 'light' && <Push><CustomButtonIcon variant="light" onPress={() => changeTheme('dark')}><IoMoonSharp /></CustomButtonIcon></Push>}
               {theme === 'dark' && <Push><CustomButtonIcon variant="light" onPress={() => changeTheme('light')}><IoSunnySharp /></CustomButtonIcon></Push>}
            </NavbarItem>
            <NavbarItem>
               {isLogged && <Profile />}
            </NavbarItem>
            <NavbarMenuToggle />
         </NavbarContent>
         <Collapse setIsMenuOpen={setIsMenuOpen} />
      </Navbar>
   )
};
