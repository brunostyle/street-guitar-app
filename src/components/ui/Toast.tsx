import { Toaster } from 'react-hot-toast';
import { useTheme } from '@state';

const styleDark: React.CSSProperties = {
   background: '#000',
   color: '#fff',
};

export const Toast = () => {
   const { isLight } = useTheme();
   return (
      <Toaster
         toastOptions={{ 
            style: isLight ? undefined : styleDark, 
            duration: 5000,
            position: 'bottom-right'
         }} 
      />
   )
}
