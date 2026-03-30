import { ToastProvider, toast } from '@heroui/react';

export const CustomToast = () => (
   <ToastProvider placement="bottom end" />
)

export const notify = {
   error: (message: string) => toast.danger('Ocurrió un error.', {
      description: message,
      timeout: 4000,
   }),
   success: (message: string) => toast.success('¡Éxito!', {
      description: message,
      timeout: 4000,
   })
}