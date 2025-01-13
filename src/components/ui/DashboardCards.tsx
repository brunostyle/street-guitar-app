import { Card, CardFooter, CardHeader, Spacer } from "@nextui-org/react";
import { AiOutlineTags, FiUsers, MdOutlineChangeHistory } from "@icons";
import { Title, WrapFit } from "@styles";

interface IDashboardCards {
   numberOfClients?: number;
	numberOfProducts?: number;
	numberOfOrders?: number;
}

export const DashboardCards = ({numberOfClients = 0, numberOfProducts = 0, numberOfOrders = 0}:IDashboardCards) => (
   <WrapFit>
      <Card className="bg-primary text-white">
         <CardHeader>
            <Title>Total clientes</Title>
         </CardHeader>
         <CardFooter>
            <FiUsers />
            <Spacer />
            <Title>{numberOfClients}</Title>
         </CardFooter>
      </Card>
      <Card>
         <CardHeader>
            <Title>Total productos</Title>
         </CardHeader>
         <CardFooter>
            <AiOutlineTags />
            <Spacer />
            <Title>{numberOfProducts}</Title>
         </CardFooter>
      </Card>
      <Card className="bg-success text-white">
         <CardHeader>
            <Title>Total ventas</Title>
         </CardHeader>
         <CardFooter>
            <MdOutlineChangeHistory />
            <Spacer />
            <Title>{numberOfOrders}</Title>
         </CardFooter>
      </Card>
   </WrapFit>
)