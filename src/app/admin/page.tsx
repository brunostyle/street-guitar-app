import { Spacer } from "@heroui/react";
import { DashboardCards, Sells, Admin, FullScreenLoading, ChartArea } from "@components";
import { SectionTitle } from "@styles";
import { useDashboard } from "@hooks";
import { IoGridOutline } from "@icons";

const Dashboard = () => {
   const { numberOfClients, numberOfProducts, numberOfOrders, lastSells, chartData, isLoading } = useDashboard();
   return (
      <Admin title="Dashboard" icon={<IoGridOutline />}>
         {isLoading
            ? <FullScreenLoading />
            :
            <div className="dashboard">
               <div className="cards">
                  <SectionTitle>Balance</SectionTitle>
                  <Spacer y={2} />
                  <DashboardCards
                     numberOfClients={numberOfClients}
                     numberOfProducts={numberOfProducts}
                     numberOfOrders={numberOfOrders}
                  />
               </div>
               <div className="sells">
                  <SectionTitle>Ultimas ventas</SectionTitle>
                  <Spacer y={2} />
                  <Sells sells={lastSells} />
               </div>
               <div className="chart">
                  <SectionTitle>Estadisticas</SectionTitle>
                  <Spacer y={2} />
                  <ChartArea data={chartData} />
               </div>
            </div>
         }
      </Admin>
   )
}

export default Dashboard;