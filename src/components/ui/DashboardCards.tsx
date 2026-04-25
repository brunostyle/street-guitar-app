import { Card, CardFooter, CardHeader, Label } from "@heroui/react";
import { IoPricetagsOutline, IoPersonAddOutline, IoTriangleOutline } from "@icons";
import { Flex, WrapFit } from "@styles";

interface IDashboardCards {
   numberOfClients?: number;
   numberOfProducts?: number;
   numberOfOrders?: number;
}

export const DashboardCards = ({ numberOfClients = 0, numberOfProducts = 0, numberOfOrders = 0 }: IDashboardCards) => (
   <WrapFit>
      <Card className="bg-accent text-white">
         <CardHeader>
            <Label>Total clientes</Label>
         </CardHeader>
         <CardFooter>
            <Flex>
               <IoPersonAddOutline />
               <Label>{numberOfClients}</Label>
            </Flex>
         </CardFooter>
      </Card>
      <Card className="shadow-outset">
         <CardHeader>
            <Label>Total productos</Label>
         </CardHeader>
         <CardFooter>
            <Flex>
               <IoPricetagsOutline />
               <Label>{numberOfProducts}</Label>
            </Flex>
         </CardFooter>
      </Card>
      <Card className="bg-success text-white">
         <CardHeader>
            <Label>Total ventas</Label>
         </CardHeader>
         <CardFooter>
            <Flex>
               <IoTriangleOutline />
               <Label>{numberOfOrders}</Label>
            </Flex>
         </CardFooter>
      </Card>
   </WrapFit>
)