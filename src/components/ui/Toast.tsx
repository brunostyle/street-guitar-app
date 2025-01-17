import { Toaster, toast } from 'react-hot-toast';
import { useTheme } from '@state';
import { MdClose, FaCheck } from "@icons";

const styleDark: React.CSSProperties = {
   background: '#09090b',
   color: '#fff',
};

export const Toast = () => {
   const { theme } = useTheme();
   return (
      <Toaster
         toastOptions={{
            style: theme === 'light' ? undefined : styleDark,
            duration: 5000,
            position: 'bottom-right'
         }}
      />
   )
}

export const notify = {
   error: (message: string) => toast.error(message, {
      icon: <MdClose color="red" />,
      className: 'dark:border-y dark:border-zinc-900'
   }),
   success: (message: string) => toast.success(message, {
      icon: <FaCheck color="green" />,
      className: 'dark:border-y dark:border-zinc-900'
   }),
}