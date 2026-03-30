import { Push, Profile, CustomButtonIcon } from '@components';
import { useTheme, useUser } from '@state';
import { IoMoonSharp, IoSunnySharp } from '@icons';
import { Navbar } from './Navbar';

export const MenuAdmin = () => {
   const { isLogged } = useUser();
   const { theme, changeTheme } = useTheme();
   return (
      <Navbar
         items={
            <>
               <div>
                  {theme === 'light' && <Push><CustomButtonIcon variant="ghost" onPress={() => changeTheme('dark')}><IoMoonSharp /></CustomButtonIcon></Push>}
                  {theme === 'dark' && <Push><CustomButtonIcon variant="ghost" onPress={() => changeTheme('light')}><IoSunnySharp /></CustomButtonIcon></Push>}
               </div>
               <div>
                  {isLogged && <Profile />}
               </div>
            </>
         }
      />
   )
};
