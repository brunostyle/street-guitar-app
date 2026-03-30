import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import type { IAuth, ILogin, IRegister } from "@interfaces";
import { useUser } from "@state";
import { fetcher, fetcherWithToken, fetcherWithTokenFile } from "@fetch";

export const useLogin = () => {
   const router = useNavigate();
   const { login } = useUser();
   return useMutation({
      mutationFn: (user: ILogin) => fetcher({ endpoint: '/users/login', method: 'POST', data: user }),
      onSuccess: (data) => {
         login(data.user);
         localStorage.setItem('token', data.token);
         router('/');
      }
   })
}

export const useRegister = () => {
   const router = useNavigate();
   const { login } = useUser();
   return useMutation({
      mutationFn: (user: IRegister) =>  fetcher({ endpoint: '/users/register', method: 'POST', data: user }),
      onSuccess: (data) => {
         login(data.user);
         localStorage.setItem('token', data.token);
         router('/');
      }
   })
}

export const useAddUserImage = ({ user }: { user?: IAuth }) => {
   const { login } = useUser();
   const { mutate: addUserImage, isPending: isAdding } = useMutation({
      mutationFn: async (file: File) => {
         if (user?.avatar) {
            await fetcherWithToken({ endpoint: '/uploads/image/users', method: 'PUT', data: { url: user.avatar } })
         }
         const formData = new FormData();
         formData.append('file', file);
         const avatar = await fetcherWithTokenFile({ endpoint: '/uploads/image/users', method: 'POST', data: formData });
         return await fetcherWithToken({ endpoint: '/users/' + user?.id, method: 'PUT', data: { avatar } });
      },
      onSuccess: (user: IAuth) => {
         login(user);
      }
   })
   return { addUserImage, isAdding }
}

export const useAuthRenew = () => {
   const { login } = useUser();
   const { mutate: renew } = useMutation({
      mutationFn: () => fetcherWithToken({endpoint: '/users/auth/renew', method: 'GET'}),
      onSuccess: (data) => {
         login(data.user);
         localStorage.setItem('token', data.token);
      },
   });
   return { renew }
};