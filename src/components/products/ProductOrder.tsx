import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { useNavigate as useRouter } from "react-router-dom";
import { IoPencil  } from '@icons'
import { CustomButtonIcon } from '@components'
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
      <Card className="h-max shadow-outset">
         <CardHeader>
            {editable ? <Title>Orden</Title> : <Title>Resumen ({items} {items === 1 ? 'producto' : 'productos'})</Title>}
         </CardHeader>
         <CardBody className="gap-2">
            {!editable &&
               <Between>
                  <Title>Orden</Title>
                  <CustomButtonIcon onPress={() => router('/cart')}><IoPencil  /></CustomButtonIcon>
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