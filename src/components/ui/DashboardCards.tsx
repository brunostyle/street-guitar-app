import { Card, CardFooter, CardHeader, Spacer } from "@heroui/react";
import { IoPricetagsOutline, IoPersonAddOutline, IoTriangleOutline } from "@icons";
import { Title, WrapFit } from "@styles";

interface IDashboardCards {
   numberOfClients?: number;
   numberOfProducts?: number;
   numberOfOrders?: number;
}

export const DashboardCards = ({ numberOfClients = 0, numberOfProducts = 0, numberOfOrders = 0 }: IDashboardCards) => (
   <WrapFit>
      <Card className="bg-primary text-white">
         <CardHeader>
            <Title>Total clientes</Title>
         </CardHeader>
         <CardFooter>
            <IoPersonAddOutline />
            <Spacer />
            <Title>{numberOfClients}</Title>
         </CardFooter>
      </Card>
      <Card className="shadow-outset">
         <CardHeader>
            <Title>Total productos</Title>
         </CardHeader>
         <CardFooter>
            <IoPricetagsOutline />
            <Spacer />
            <Title>{numberOfProducts}</Title>
         </CardFooter>
      </Card>
      <Card className="bg-success text-white">
         <CardHeader>
            <Title>Total ventas</Title>
         </CardHeader>
         <CardFooter>
            <IoTriangleOutline />
            <Spacer />
            <Title>{numberOfOrders}</Title>
         </CardFooter>
      </Card>
   </WrapFit>
)