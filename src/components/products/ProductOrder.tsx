import { Alert, AlertContent, AlertDescription, AlertIndicator, AlertTitle, Card, CardContent, Description, Label, Separator } from "@heroui/react";
import { useNavigate as useRouter } from "react-router";
import { IoDocumentTextOutline, IoGiftSharp, IoPencil, IoPricetagsOutline, IoTriangleOutline } from '@icons'
import { CustomButtonIcon } from '@components'
import { Between, Flex, Gap, Subtitle } from "@styles";
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
               <Subtitle>Resumen ({items} {items === 1 ? 'tablatura' : 'tablaturas'})</Subtitle>
               <Between>
                  <Label className="text-accent">Detalle de la orden</Label>
                  {page === 'checkout' && <CustomButtonIcon onPress={() => router(ROUTES.cart)}><IoPencil /></CustomButtonIcon>}
               </Between>
               <Between>
                  <Description>
                     <Flex>
                        <IoDocumentTextOutline />
                        Nro. Tablaturas:
                     </Flex>
                  </Description>
                  <Label>{items} {items === 1 ? 'item' : 'items'}</Label>
               </Between>
               <Between>
                  <Description>
                     <Flex>
                        <IoTriangleOutline />
                        Subtotal:
                     </Flex>
                  </Description>
                  <Label>${10 * items!}</Label>
               </Between>
               <Between>
                  <Description>
                     <Flex>
                        <IoPricetagsOutline />
                        Descuento:
                     </Flex>
                  </Description>
                  <Label className="text-success">-${10 * items!}</Label>
               </Between>
               <Separator />
               <Between>
                  <Subtitle>Total:</Subtitle>
                  <Subtitle>${total}</Subtitle>
               </Between>
               {page === "checkout" &&
                  <Alert status="accent" className="shadow-outset">
                     <AlertIndicator>
                        <IoGiftSharp size="1.5em" />
                     </AlertIndicator>
                     <AlertContent>
                        <AlertTitle>¡Acceso 100% gratuito!</AlertTitle>
                        <AlertDescription>
                           Gracias por ser parte de Street Guitar
                        </AlertDescription>
                     </AlertContent>
                  </Alert>
               }
               <div>
                  {children}
               </div>
            </Gap>
         </CardContent>
      </Card>
   )
}