import { Spacer } from "@heroui/react";
import { DashboardCards, Sells, Admin, Chart, FullScreenLoading } from "@components";
import { SectionTitle } from "@styles";
import { useDashboard } from "@hooks";
import { BiGridAlt } from "@icons";

const Dashboard = () => {
   const { numberOfClients, numberOfProducts, numberOfOrders, lastSells, chart, isLoading } = useDashboard();
   return (
      <Admin title="Dashboard" icon={<BiGridAlt />}>
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
                  <Chart clients={chart?.clients} sells={chart?.sells} />
               </div>
            </div>
         }
      </Admin>
   )
}

export default Dashboard;