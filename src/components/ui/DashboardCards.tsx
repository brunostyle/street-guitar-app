import { Card, CardFooter, CardHeader } from "@heroui/react";
import { IoPricetagsOutline, IoPersonAddOutline, IoTriangleOutline } from "@icons";
import { Flex, Title, WrapFit } from "@styles";

interface IDashboardCards {
   numberOfClients?: number;
   numberOfProducts?: number;
   numberOfOrders?: number;
}

export const DashboardCards = ({ numberOfClients = 0, numberOfProducts = 0, numberOfOrders = 0 }: IDashboardCards) => (
   <WrapFit>
      <Card className="bg-accent text-white">
         <CardHeader>
            <Title>Total clientes</Title>
         </CardHeader>
         <CardFooter>
            <Flex>
               <IoPersonAddOutline />
               <Title>{numberOfClients}</Title>
            </Flex>
         </CardFooter>
      </Card>
      <Card className="shadow-outset">
         <CardHeader>
            <Title>Total productos</Title>
         </CardHeader>
         <CardFooter>
            <Flex>
               <IoPricetagsOutline />
               <Title>{numberOfProducts}</Title>
            </Flex>
         </CardFooter>
      </Card>
      <Card className="bg-success text-white">
         <CardHeader>
            <Title>Total ventas</Title>
         </CardHeader>
         <CardFooter>
            <Flex>
               <IoTriangleOutline />
               <Title>{numberOfOrders}</Title>
            </Flex>
         </CardFooter>
      </Card>
   </WrapFit>
)