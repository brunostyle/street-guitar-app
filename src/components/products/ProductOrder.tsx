import { Card, CardContent, Description, Label, Separator } from "@heroui/react";
import { useNavigate as useRouter } from "react-router";
import { IoPencil } from '@icons'
import { CustomButtonIcon } from '@components'
import { Between, Gap } from "@styles";
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
         <CardContent>
            <Gap>
               {page === "cart" && <Label>Orden</Label>}
               {page === "checkout" &&
                  <>
                     <Label>Resumen ({items} {items === 1 ? 'tablatura' : 'tablaturas'})</Label>
                     <Between>
                        <Label>Orden</Label>
                        <CustomButtonIcon onPress={() => router(ROUTES.cart)}><IoPencil /></CustomButtonIcon>
                     </Between>
                  </>
               }
               <Between>
                  <Description>Nro. Tablaturas:</Description>
                  <Description>{items} {items === 1 ? 'item' : 'items'}</Description>
               </Between>
               <Between>
                  <Description>Subtotal:</Description>
                  <Description>${10 * items!}</Description>
               </Between>
               <Between>
                  <Description>Descuento:</Description>
                  <Description>-${10 * items!}</Description>
               </Between>
               <Separator />
               <Between>
                  <Label>Total:</Label>
                  <Label>${total}</Label>
               </Between>
               <div>
                  {children}
               </div>
            </Gap>
         </CardContent>
      </Card>
   )
}