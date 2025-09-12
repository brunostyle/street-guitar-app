import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router";
import type { IOrderCheckout, IOrder } from "@interfaces";
import { fetcher, fetcherWithToken } from "@fetch";

interface usePaginateOrdersProps {
   limit: number;
   page: number;
   total: number;
   orders: IOrder[];
}

export const usePaginateOrders = () => {
   const [page, setPage] = useState(1);
   const limit = 10;
   const { data, isLoading } = useQuery<usePaginateOrdersProps>({
      queryKey: ["orders", page],
      queryFn: () => fetcher({ endpoint: `/orders/?page=${page}&limit=${limit}`, method: 'GET' })
   })
   return { orders: data?.orders, isEmpty: data?.orders?.length === 0, isLoading, page, setPage, total: Math.ceil(data?.total! / limit) }
}
//--------------------------------- GET ---------------------------------
export const useGetOrder = (id: string) => {
   const { data, isLoading } = useQuery<IOrder>({
      queryKey: ["order", id],
      queryFn: () => fetcher({ endpoint: '/orders/' + id, method: 'GET' })
   })
   return { products: data?.products, total: data?.total, items: data?.items, paid: data?.paid, isLoading }
}
//--------------------------------- ADD ---------------------------------
export const useAddOrder = () => {
   const router = useNavigate();
   const { mutate: addOrder, isPending: isAddingOrder } = useMutation({
      mutationFn: (order: IOrderCheckout) => fetcherWithToken({ endpoint: '/orders', method: 'POST', data: order }),
      onSuccess: (order) => {
         router('/checkout/' + order?.id);
      }
   })
   return { addOrder, isAddingOrder }
}