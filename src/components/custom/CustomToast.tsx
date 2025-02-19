import { ToastProvider, addToast } from '@heroui/react';

export const CustomToast = () => (
   <ToastProvider
      placement="bottom-right"
      toastProps={{
         timeout: 4000,
         variant: 'bordered'
      }}
   />
)

export const notify = {
   error: (message: string) => addToast({
      title: 'Ocurrió un error.',
      description: message,
      color: 'danger',
      classNames: {
         icon: "text-red-500",
      }
   }),
   success: (message: string) => addToast({
      title: '¡Éxito!',
      description: message,
      color: 'success',
      classNames: {
         icon: "text-green-500",
      }
   })
}