import { Navbar, Spacer, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarItem } from '@heroui/react';
import { Link as NextLink } from 'react-router-dom'
import { Collapse, Logo, Push, Profile, CustomIconButton } from '@components';
import { useTheme, useUser } from '@state';
import { Title } from '@styles';
import { FaMoon, IoSunny } from '@icons';

export const MenuAdmin = () => {
   const { isLogged } = useUser();
   const { theme, changeTheme } = useTheme();
   return (
      <Navbar isBordered maxWidth="full">
         <NavbarBrand>
            <NextLink to="/"><Logo /></NextLink>
            <Spacer x={2} />
            <Title>Street Guitar</Title>
         </NavbarBrand>

         <NavbarContent justify="end">
            <NavbarItem>
               {theme === 'light' && <Push><CustomIconButton variant="light" onPress={() => changeTheme('dark')}><FaMoon /></CustomIconButton></Push>}
               {theme === 'dark' && <Push><CustomIconButton variant="light" onPress={() => changeTheme('light')}><IoSunny /></CustomIconButton></Push>}
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
