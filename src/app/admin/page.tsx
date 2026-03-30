import { DashboardCards, Sells, Admin, FullScreenLoading, ChartArea } from "@components";
import { SectionTitle, Spacer } from "@styles";
import { useDashboard } from "@hooks";
import { IoGridOutline } from "@icons";

export const Dashboard = () => {
   const { numberOfClients, numberOfProducts, numberOfOrders, lastSells, chartData, isLoading } = useDashboard();
   return (
      <Admin title="Dashboard" icon={<IoGridOutline />}>
         {isLoading
            ? <FullScreenLoading />
            :
            <div className="dashboard">
               <div className="cards">
                  <SectionTitle>Balance</SectionTitle>
                  <Spacer />
                  <DashboardCards
                     numberOfClients={numberOfClients}
                     numberOfProducts={numberOfProducts}
                     numberOfOrders={numberOfOrders}
                  />
               </div>
               <div className="sells">
                  <SectionTitle>Ultimas ventas</SectionTitle>
                  <Spacer />
                  <Sells sells={lastSells} />
               </div>
               <div className="chart">
                  <SectionTitle>Estadisticas</SectionTitle>
                  <Spacer />
                  <ChartArea data={chartData} />
               </div>
            </div>
         }
      </Admin>
   )
}