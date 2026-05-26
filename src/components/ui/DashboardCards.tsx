import { Avatar, AvatarFallback, Card, CardContent, Description } from "@heroui/react";
import { IoPricetagsOutline, IoPersonAddOutline, IoTriangleOutline } from "@icons";
import { Flex, Subtitle, WrapFit } from "@styles";

interface IDashboardCards {
   numberOfClients?: number;
   numberOfProducts?: number;
   numberOfOrders?: number;
}

export const DashboardCards = ({ numberOfClients = 0, numberOfProducts = 0, numberOfOrders = 0 }: IDashboardCards) => (
   <WrapFit>
      <Card className="shadow-outset">
         <CardContent>
            <Flex>
               <Avatar color="accent">
                  <AvatarFallback>
                     <IoPersonAddOutline />
                  </AvatarFallback>
               </Avatar>
               <div>
                  <Description>Total clientes</Description>
                  <Subtitle>{numberOfClients}</Subtitle>
               </div>
            </Flex>
         </CardContent>
      </Card>
      <Card className="shadow-outset">
         <CardContent>
            <Flex>
               <Avatar color="accent">
                  <AvatarFallback>
                     <IoPricetagsOutline />
                  </AvatarFallback>
               </Avatar>
               <div>
                  <Description>Total productos</Description>
                  <Subtitle>{numberOfProducts}</Subtitle>
               </div>
            </Flex>
         </CardContent>
      </Card>
      <Card className="shadow-outset">
         <CardContent>
            <Flex>
               <Avatar color="accent">
                  <AvatarFallback>
                     <IoTriangleOutline />
                  </AvatarFallback>
               </Avatar>
               <div>
                  <Description>Total ventas</Description>
                  <Subtitle>{numberOfOrders}</Subtitle>
               </div>
            </Flex>
         </CardContent>
      </Card>
   </WrapFit>
)