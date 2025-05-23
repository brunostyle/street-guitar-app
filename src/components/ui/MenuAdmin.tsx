import { Navbar, Spacer, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarItem } from '@heroui/react';
import { Link as NextLink } from 'react-router-dom'
import { Collapse, Logo, Push, Profile, CustomButtonIcon } from '@components';
import { useTheme, useUser } from '@state';
import { Title } from '@styles';
import { IoMoonSharp , IoSunnySharp   } from '@icons';
import { useState } from 'react';

export const MenuAdmin = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { isLogged } = useUser();
   const { theme, changeTheme } = useTheme();
   return (
      <Navbar isBordered maxWidth="full" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
         <NavbarBrand>
            <NextLink to="/"><Logo /></NextLink>
            <Spacer x={3} />
            <Title>Street Guitar</Title>
         </NavbarBrand>

         <NavbarContent justify="end">
            <NavbarItem>
               {theme === 'light' && <Push><CustomButtonIcon variant="light" onPress={() => changeTheme('dark')}><IoMoonSharp  /></CustomButtonIcon></Push>}
               {theme === 'dark' && <Push><CustomButtonIcon variant="light" onPress={() => changeTheme('light')}><IoSunnySharp   /></CustomButtonIcon></Push>}
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
