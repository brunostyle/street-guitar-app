import { useQuery } from "@tanstack/react-query"
import { fetcherWithToken } from "@fetch";

export const useDashboard = () => {
   const { data, isLoading } = useQuery({
      queryKey: ["dashboard"],
      queryFn: () =>  fetcherWithToken({ endpoint: '/dashboard', method: 'GET' })
   })
   return { ...data, isLoading }
}