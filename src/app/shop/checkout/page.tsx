import { Alert, AlertContent, AlertIndicator, AlertTitle } from "@heroui/react";
import { useParams } from "react-router";
import ConfettiExplosion from 'react-confetti-explosion';
import { Container, Grid, GridContainer, SectionSubTitle, SectionTitle } from "@styles";
import { CustomBreadcrumbs, FullScreenLoading, ProductCard, ProductOrder } from "@components";
import { useGetOrder } from "@hooks";
import { IoCartOutline, IoDocumentTextOutline, IoHomeOutline, IoShieldCheckmarkOutline } from "@icons";
import { ROUTES } from "@navigation";

const breadcrumbs = [
   { title: 'Home', route: ROUTES.home, icon: <IoHomeOutline /> },
   { title: 'Carrito', route: ROUTES.cart, icon: <IoCartOutline /> },
   { title: 'Orden', route: '', icon: <IoDocumentTextOutline /> },
]

export const Checkout = () => {
   const { id } = useParams();
   const { products, total, items, paid, isLoading } = useGetOrder(id!);
   return (
      <Container>
         <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
         <SectionTitle>Orden: {id}</SectionTitle>
         <SectionSubTitle>Resumen de la orden</SectionSubTitle>
         {!isLoading && <ConfettiExplosion force={0.8} duration={3000} particleCount={250} width={1600} />}
         {isLoading ?
            <FullScreenLoading />
            :
            <GridContainer>
               <Grid>
                  <ProductCard page="checkout" cart={products} paid={paid} />
               </Grid>
               <Grid>
                  <ProductOrder page="checkout" total={total} items={items} />
                  <Alert status="accent" className="shadow-outset">
                     <AlertIndicator>
                        <IoShieldCheckmarkOutline size="1.3em" />
                     </AlertIndicator>
                     <AlertContent>
                        <AlertTitle>Compra segura y acceso inmediato</AlertTitle>
                     </AlertContent>
                  </Alert>
               </Grid>
            </GridContainer>
         }
      </Container>
   )
};