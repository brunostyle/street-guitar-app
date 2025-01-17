import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { useNavigate as useRouter } from "react-router-dom";
import { BiPencil } from '@icons'
import { Between, Subtitle, Title } from "@styles";

interface IProductOrder {
   children?: JSX.Element;
   editable?: boolean;
   total?: number;
   items?: number;
}

export const ProductOrder = ({ editable = false, children, total, items }: IProductOrder) => {
   const router = useRouter();
   return (
      <Card className="h-max">
         <CardHeader>
            {editable ? <Title>Orden</Title> : <Title>Resumen ({items} {items === 1 ? 'producto' : 'productos'})</Title>}
         </CardHeader>
         <CardBody className="gap-2">
            {!editable &&
               <Between>
                  <Title>Orden</Title>
                  <Button isIconOnly variant="bordered" size="sm" onPress={() => router('/cart')}><BiPencil /></Button>
               </Between>}
            <Between>
               <Subtitle>No. Productos</Subtitle>
               <Subtitle>{items} {items === 1 ? 'item' : 'items'}</Subtitle>
            </Between>
            <Between>
               <Title>Total</Title>
               <Title>${total}</Title>
            </Between>
         </CardBody>
         <CardFooter>
            {children}
         </CardFooter>
      </Card>
   )
}