import { useMutation, useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IProduct } from "@interfaces";
import { fetcher, fetcherWithToken, fetcherWithTokenFile } from "@fetch";
import { useState } from "react";

//--------------------------------- GET ---------------------------------
export const useProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => fetcher({ endpoint: '/products', method: 'GET' })
  })
  return { products: data?.products, isEmpty: data?.products?.length === 0, isLoading }
}
//--------------------------------- GET PAGINATED---------------------------------
export const usePaginateProducts = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: async () => fetcher({ endpoint: `/products/?page=${page}&limit=${limit}`, method: 'GET' })
  })
  return { products: data?.products, isEmpty: data?.products?.length === 0, isLoading, page, setPage, total: Math.ceil(data?.total / limit) }
}
//--------------------------------- GET PRODUCT---------------------------------
export const useGetProduct = (id: string): { product: IProduct, isLoading: boolean } => {
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetcher({ endpoint: '/products/' + id, method: 'GET' })
  })
  return { product, isLoading }
}
//--------------------------------- GET CATEGORY---------------------------------
export const useGetCategory = (category: string) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", category],
    queryFn: () => fetcher({ endpoint: '/products/category/' + category, method: 'GET' })
  })
  return { products, isLoading, isEmpty: products?.length === 0 }
}
//--------------------------------- GET QUERY---------------------------------
export const useGetProductsQuery = (query: string): { products?: IProduct[], isEmpty: boolean, isLoading: boolean } => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", query],
    queryFn: async (): Promise<IProduct[]> => fetcher({ endpoint: '/products/query/' + query, method: 'GET' })
  })
  return { products, isLoading, isEmpty: products?.length === 0 }
}
//--------------------------------- ADD ---------------------------------
export const useAddProduct = () => {
  const router = useNavigate();
  const { mutate: addProduct, isPending: isAdding } = useMutation({
    mutationFn: async (product: IProduct) => fetcherWithToken({ endpoint: '/products', method: 'POST', data: product }),
    onSuccess: () => {
      toast.success('Producto añadido')
      router('/admin/products')
    }
  })
  return { addProduct, isAdding }
}
//--------------------------------- UPDATE ---------------------------------
export const useUpdateProduct = () => {
  const router = useNavigate();
  const { mutate: updateProduct, isPending: isUpdating } = useMutation({
    mutationFn: async (product: IProduct) => fetcherWithToken({ endpoint: '/products/' + product.id, method: 'PUT', data: product }),
    onSuccess: () => {
      toast.success('Producto actualizado')
      router('/admin/products')
    }
  })
  return { updateProduct, isUpdating }
}
//--------------------------------- DELETE ---------------------------------
export const useDeleteProduct = () => {
  const router = useNavigate();
  const { mutate: deleteProduct, isPending: isDeleting } = useMutation({
    mutationFn: async (id: string) => fetcherWithToken({ endpoint: '/products/' + id, method: 'DELETE' }),
    onSuccess: () => {
      toast.success('Producto eliminado')
      router('/admin/products')
    }
  })
  return { deleteProduct, isDeleting }
}
//--------------------------------- UPLOAD FILE ---------------------------------
export const useAddFile = () => {
  const { mutate: addFile, isPending: isAdding } = useMutation({
    mutationFn: ({ file, type }: { file: File, type: 'file' | 'products' | 'users' | 'tabs' }) => {
      const formData = new FormData();
      formData.append('file', file);
      if (type === 'file') {
        return fetcherWithTokenFile({ endpoint: '/uploads/file', method: 'POST', data: formData });
      } else {
        return fetcherWithTokenFile({ endpoint: '/uploads/image/' + type, method: 'POST', data: formData });
      }
    }
  })
  return { addFile, isAdding }
}
//--------------------------------- DELETE FILE ---------------------------------
export const useDeleteFile = () => {
  const { mutate: deleteFile, isPending: isDeleting } = useMutation({
    mutationFn: ({ url, type }: { url: string, type: 'file' | 'products' | 'users' | 'tabs' }) => {
      if (type === 'file') {
        return fetcherWithToken({ endpoint: '/uploads/file', method: 'PUT', data: { url } })
      } else {
        return fetcherWithToken({ endpoint: '/uploads/image/' + type, method: 'PUT', data: { url } })
      }
    }
  })
  return { deleteFile, isDeleting }
}