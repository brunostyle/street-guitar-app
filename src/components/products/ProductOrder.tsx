import { Card, CardBody, Divider } from "@heroui/react";
import { useNavigate as useRouter } from "react-router";
import { IoPencil } from '@icons'
import { CustomButtonIcon } from '@components'
import { Between, Subtitle, Title } from "@styles";
import { ROUTES } from "@navigation";
import type { JSX } from "react";

interface IProductOrder {
   page: 'cart' | 'checkout';
   children?: JSX.Element;
   total?: number;
   items?: number;
}

export const ProductOrder = ({ children, total, items, page }: IProductOrder) => {
   const router = useRouter();
   return (
      <Card className="h-max shadow-outset">
         <CardBody className="gap-3">
            {page === "cart" && <Title>Orden</Title>}
            {page === "checkout" &&
               <>
                  <Title>Resumen ({items} {items === 1 ? 'tablatura' : 'tablaturas'})</Title>
                  <Between>
                     <Title>Orden</Title>
                     <CustomButtonIcon onPress={() => router(ROUTES.cart)}><IoPencil /></CustomButtonIcon>
                  </Between>
               </>
            }
            <Between>
               <Subtitle>Nro. Tablaturas:</Subtitle>
               <Subtitle>{items} {items === 1 ? 'item' : 'items'}</Subtitle>
            </Between>
            <Between>
               <Subtitle>Subtotal:</Subtitle>
               <Subtitle>${10 * items!}</Subtitle>
            </Between>
            <Between>
               <Subtitle>Descuento:</Subtitle>
               <Subtitle>-${10 * items!}</Subtitle>
            </Between>
            <Divider />
            <Between>
               <Title>Total:</Title>
               <Title>${total}</Title>
            </Between>
            <div>
               {children}
            </div>
         </CardBody>
      </Card>
   )
}