import { ToastProvider, addToast } from '@heroui/react';
import { IoCloseOutline, IoCheckmarkOutline } from '@icons';

export const CustomToast = () => (
   <ToastProvider
      placement="bottom-right"
      toastProps={{
         timeout: 4000,
         shouldShowTimeoutProgress: true,
         variant: 'flat'
      }}
   />
)

export const notify = {
   error: (message: string) => addToast({
      title: 'Ocurrió un error.',
      description: message,
      icon: <IoCloseOutline />,
      classNames: {
         icon: "size-6 text-red-500",
      }
   }),
   success: (message: string) => addToast({
      title: '¡Éxito!',
      description: message,
      icon: <IoCheckmarkOutline />,
      classNames: {
         icon: "size-4 text-green-500",
      }
   })
}