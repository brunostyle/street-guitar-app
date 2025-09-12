import { useMutation, useQuery } from "@tanstack/react-query"
import { fetcher, fetcherWithToken, fetcherWithTokenFile } from "@fetch";
import { useState } from "react";
import type { IAuth, IUser } from "@interfaces";
import { useUser } from "@state";
import { notify } from "@components";

interface usePaginateUsersProps {
  limit: number;
  page: number;
  total: number;
  users: IUser[];
}

export const usePaginateUsers = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isLoading } = useQuery<usePaginateUsersProps>({
    queryKey: ["users", page],
    queryFn: () => fetcher({ endpoint: `/users/?page=${page}&limit=${limit}`, method: 'GET' })
  })
  return { users: data?.users, isEmpty: data?.users?.length === 0, isLoading, page, setPage, total: Math.ceil(data?.total! / limit) }
}

export const useUpdateUser = () => {
  const { login } = useUser();
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, data }: { id?: string, data: any }) => fetcherWithToken({ endpoint: '/users/' + id, method: 'PUT', data }),
    onSuccess: (user) => {
      login(user);
      notify.success('Usuario actualizado');
    }
  })
  return { updateUser, isUpdating }
}

export const useDeleteUser = () => {
  const { logout } = useUser();
  const { mutate: deleteUser, isPending: isDeleting } = useMutation({
    mutationFn: async (user: IAuth) => {
      if (user.avatar) {
        await fetcherWithToken({ endpoint: '/uploads/image/users', method: 'PUT', data: { url: user.avatar } })
      }
      return fetcherWithToken({ endpoint: '/users/' + user?.id, method: 'DELETE' })
    },
    onSuccess: () => {
      logout();
    }
  })
  return { deleteUser, isDeleting }
}

export const useAddImageUser = () => {
  const { user, login } = useUser();
  const { mutate: addImage, isPending: isAdding } = useMutation({
    mutationFn: async ({ file }: { file: File }) => {
      if (user?.avatar) {
        await fetcherWithToken({ endpoint: '/uploads/image/users', method: 'PUT', data: { url: user.avatar } })
      }
      const data = new FormData();
      data.append('file', file);
      const avatar = await fetcherWithTokenFile({ endpoint: '/uploads/image/users', method: 'POST', data });
      return fetcherWithToken({ endpoint: '/users/' + user?.id, method: 'PUT', data: { avatar } });
    },
    onSuccess: (user) => {
      login(user);
    }
  })
  return { addImage, isAdding }
}