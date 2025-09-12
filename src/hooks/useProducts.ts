import { useMutation, useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router";
import type { IProduct } from "@interfaces";
import { fetcher, fetcherWithToken, fetcherWithTokenFile } from "@fetch";
import { useState } from "react";
import { notify } from "@components";

//--------------------------------- GET ---------------------------------

interface useProductsProps {
  limit: number;
  page: number;
  total: number;
  products: IProduct[];
}

export const useProducts = () => {
  const { data, isLoading } = useQuery<useProductsProps>({
    queryKey: ["products"],
    queryFn: () => fetcher({ endpoint: '/products?limit=100', method: 'GET' })
  })
  return { products: data?.products, isEmpty: data?.products?.length === 0, isLoading }
}
//--------------------------------- GET PAGINATED---------------------------------
export const usePaginateProducts = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isLoading } = useQuery<useProductsProps>({
    queryKey: ["products", page],
    queryFn: () => fetcher({ endpoint: `/products/?page=${page}&limit=${limit}`, method: 'GET' })
  })
  return { products: data?.products, isEmpty: data?.products?.length === 0, isLoading, page, setPage, total: Math.ceil(data?.total! / limit) }
}
//--------------------------------- GET PRODUCT---------------------------------
export const useGetProduct = (id: string) => {
  const { data: product, isLoading } = useQuery<IProduct>({
    queryKey: ["product", id],
    queryFn: () => fetcher({ endpoint: '/products/' + id, method: 'GET' })
  })
  return { product, isLoading }
}
//--------------------------------- GET CATEGORY---------------------------------
export const useGetCategory = (category: string) => {
  const { data: products, isLoading } = useQuery<IProduct[]>({
    queryKey: ["products", category],
    queryFn: () => fetcher({ endpoint: '/products/category/' + category, method: 'GET' })
  })
  return { products, isLoading, isEmpty: products?.length === 0 }
}
//--------------------------------- GET CATEGORY---------------------------------
export const useGetDifficulty = (difficulty: number) => {
  const { data: products, isLoading } = useQuery<IProduct[]>({
    queryKey: ["products", difficulty],
    queryFn: () => fetcher({ endpoint: '/products/difficulty/' + difficulty, method: 'GET' })
  })
  return { products, isLoading, isEmpty: products?.length === 0 }
}
//--------------------------------- GET QUERY---------------------------------
export const useGetProductsQuery = (query: string) => {
  const { data: products, isLoading } = useQuery<IProduct[]>({
    queryKey: ["products", query],
    queryFn: () => fetcher({ endpoint: '/products/query/' + query, method: 'GET' })
  })
  return { products, isLoading, isEmpty: products?.length === 0 }
}
//--------------------------------- ADD ---------------------------------
export const useAddProduct = () => {
  const router = useNavigate();
  const { mutate: addProduct, isPending: isAdding } = useMutation({
    mutationFn: (product: IProduct) => fetcherWithToken({ endpoint: '/products', method: 'POST', data: product }),
    onSuccess: () => {
      notify.success('Producto añadido')
      router('/admin/products')
    }
  })
  return { addProduct, isAdding }
}
//--------------------------------- UPDATE ---------------------------------
export const useUpdateProduct = () => {
  const router = useNavigate();
  const { mutate: updateProduct, isPending: isUpdating } = useMutation({
    mutationFn: (product: IProduct) => fetcherWithToken({ endpoint: '/products/' + product.id, method: 'PUT', data: product }),
    onSuccess: () => {
      notify.success('Producto actualizado')
      router('/admin/products')
    }
  })
  return { updateProduct, isUpdating }
}
//--------------------------------- DELETE ---------------------------------
export const useDeleteProduct = () => {
  const router = useNavigate();
  const { mutate: deleteProduct, isPending: isDeleting } = useMutation({
    mutationFn: async (id: string) => {
      const product = await fetcher({ endpoint: '/products/' + id, method: 'GET' })
      if (product.pdf) {
        await fetcherWithToken({ endpoint: '/uploads/file', method: 'PUT', data: { url: product.pdf } })
      }
      if (product.images) {
        product.images.forEach(async (image: string) => {
          await fetcherWithToken({ endpoint: '/uploads/image/products', method: 'PUT', data: { url: image } })
        })
      }
      return fetcherWithToken({ endpoint: '/products/' + id, method: 'DELETE' })
    },
    onSuccess: () => {
      notify.success('Producto eliminado')
      router('/admin/products')
    }
  })
  return { deleteProduct, isDeleting }
}
//--------------------------------- UPLOAD PDF ---------------------------------
export const useAddPDF = (productId: string) => {
  const { mutate: addPDF, isPending: isAdding } = useMutation({
    mutationFn: async ({ file }: { file: File }) => {
      if (productId) {
        const product = await fetcher({ endpoint: '/products/' + productId, method: 'GET' })
        if (product.pdf) {
          await fetcherWithToken({ endpoint: '/uploads/file/tabs', method: 'PUT', data: { url: product.pdf } })
        }
      }
      const data = new FormData();
      data.append('file', file);
      return fetcherWithTokenFile({ endpoint: '/uploads/file/tabs', method: 'POST', data });
    }
  })
  return { addPDF, isAdding }
}
//--------------------------------- DELETE PDF ---------------------------------
export const useDeletePDF = () => {
  const { mutate: deletePDF, isPending: isDeleting } = useMutation({
    mutationFn: ({ url }: { url: string }) => {
      return fetcherWithToken({ endpoint: '/uploads/file/tabs', method: 'PUT', data: { url } })
    }
  })
  return { deletePDF, isDeleting }
}
//--------------------------------- UPLOAD IMAGE ---------------------------------
export const useAddImage = () => {
  const { mutate: addImage, isPending: isAdding } = useMutation({
    mutationFn: ({ file }: { file: File }) => {
      const data = new FormData();
      data.append('file', file);
      return fetcherWithTokenFile({ endpoint: '/uploads/image/products', method: 'POST', data });
    }
  })
  return { addImage, isAdding }
}
//--------------------------------- DELETE IMAGE ---------------------------------
export const useDeleteImage = () => {
  const { mutate: deleteImage, isPending: isDeleting } = useMutation({
    mutationFn: ({ url }: { url: string }) => {
      return fetcherWithToken({ endpoint: '/uploads/image/products', method: 'PUT', data: { url } })
    }
  })
  return { deleteImage, isDeleting }
}