import { Spacer } from "@heroui/react";
import { DashboardCards, Sells, Admin, FullScreenLoading, ChartArea } from "@components";
import { SectionTitle } from "@styles";
import { useDashboard } from "@hooks";

const chartData = [
   { time: "2025-01-01", value: 28.87 },
   { time: "2025-01-02", value: 24.28 },
   { time: "2025-01-03", value: 28.73 },
   { time: "2025-01-04", value: 26.00 },
   { time: "2025-01-05", value: 21.74 },
   { time: "2025-01-06", value: 19.83 },
   { time: "2025-01-07", value: 20.30 },
   { time: "2025-01-08", value: 21.40 },
   { time: "2025-01-09", value: 18.29 },
   { time: "2025-01-10", value: 14.27 },
   { time: "2025-01-11", value: 10.94 },
   { time: "2025-01-12", value: 13.58 },
   { time: "2025-01-13", value: 13.24 },
   { time: "2025-01-14", value: 15.70 },
   { time: "2025-01-15", value: 14.70 },
   { time: "2025-01-16", value: 14.75 },
   { time: "2025-01-17", value: 15.12 },
   { time: "2025-01-18", value: 13.10 },
   { time: "2025-01-19", value: 8.84 },
   { time: "2025-01-20", value: 9.84 },
   { time: "2025-01-21", value: 14.70 },
   { time: "2025-01-22", value: 19.10 },
   { time: "2025-01-23", value: 21.55 },
   { time: "2025-01-24", value: 21.74 },
   { time: "2025-01-25", value: 17.88 },
   { time: "2025-01-26", value: 16.56 },
   { time: "2025-01-27", value: 13.06 },
   { time: "2025-01-28", value: 14.47 },
   { time: "2025-01-29", value: 14.96 },
   { time: "2025-01-30", value: 19.45 },
   { time: "2025-01-31", value: 16.41 },
   { time: "2025-02-01", value: 20.12 },
   { time: "2025-02-02", value: 19.74 },
   { time: "2025-02-03", value: 18.57 },
   { time: "2025-02-04", value: 21.74 },
   { time: "2025-02-05", value: 17.11 },
   { time: "2025-02-06", value: 13.71 },
   { time: "2025-02-07", value: 17.42 },
   { time: "2025-02-08", value: 14.97 },
   { time: "2025-02-09", value: 13.68 },
   { time: "2025-02-10", value: 10.11 },
   { time: "2025-02-11", value: 8.76 },
   { time: "2025-02-12", value: 7.60 },
   { time: "2025-02-13", value: 7.71 },
   { time: "2025-02-14", value: 12.44 },
   { time: "2025-02-15", value: 8.87 },
   { time: "2025-02-16", value: 5.74 },
   { time: "2025-02-17", value: 5.38 },
   { time: "2025-02-18", value: 2.73 },
   { time: "2025-02-19", value: 6.03 },
]

const Dashboard = () => {
   const { numberOfClients, numberOfProducts, numberOfOrders, lastSells, isLoading } = useDashboard();
   return (
      <Admin title="Dashboard">
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