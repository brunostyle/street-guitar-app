import { useTheme as useThemeHero } from '@heroui/react';
import { Push, Profile, CustomButtonIcon } from '@components';
import { useTheme, useUser } from '@state';
import { IoMoonOutline, IoSunnyOutline } from '@icons';
import { Navbar } from './Navbar';

export const MenuAdmin = () => {
   const { isLogged } = useUser();
   const { theme, changeTheme } = useTheme();
   const { setTheme } = useThemeHero();
   return (
      <Navbar>
         <div>
            {theme === 'light' && <Push><CustomButtonIcon variant="ghost" onPress={() => { changeTheme('dark'); setTheme('dark') }}><IoMoonOutline /></CustomButtonIcon></Push>}
            {theme === 'dark' && <Push><CustomButtonIcon variant="ghost" onPress={() => { changeTheme('light'); setTheme('light') }}><IoSunnyOutline /></CustomButtonIcon></Push>}
         </div>
         <div>
            {isLogged && <Profile />}
         </div>
      </Navbar>)
};