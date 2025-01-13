import { useQuery } from "@tanstack/react-query"
import { fetcher } from "@fetch";
import { useState } from "react";

export const usePaginateUsers = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isLoading } = useQuery({
    queryKey: ["users", page],
    queryFn: async () => fetcher({ endpoint: `/users/?page=${page}&limit=${limit}`, method: 'GET' })
  })
  return { users: data?.users, isEmpty: data?.users?.length === 0, isLoading, page, setPage, total: Math.ceil(data?.total / limit) }
}