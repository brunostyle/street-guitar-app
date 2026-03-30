import { useQuery } from "@tanstack/react-query"
import { fetcherWithToken } from "@fetch";
import type { IChartData, IOrderDashboard } from "@interfaces";

interface useDashboardProps {
   numberOfClients: number;
   numberOfProducts: number;
   numberOfOrders: number;
   chartData: IChartData[];
   lastSells: IOrderDashboard[];
}

export const useDashboard = () => {
   const { data, isLoading } = useQuery<useDashboardProps>({
      queryKey: ["dashboard"],
      queryFn: () => fetcherWithToken({ endpoint: '/dashboard', method: 'GET' })
   })
   return { ...data, isLoading }
}