import { Alert, BreadcrumbItem, Breadcrumbs, Spacer } from "@heroui/react";
import { useNavigate, useParams } from "react-router";
import ConfettiExplosion from 'react-confetti-explosion';
import { Container, Grid, GridContainer, SectionSubTitle, SectionTitle } from "@styles";
import { FullScreenLoading, ProductCard, ProductOrder } from "@components";
import { useGetOrder } from "@hooks";
import { IoCartOutline, IoDocumentTextOutline, IoHomeOutline } from "@icons";
import { ROUTES } from "@navigation";

const Checkout = () => {
   const { id } = useParams();
   const router = useNavigate();
   const { products, total, items, paid, isLoading } = useGetOrder(id!);
   return (
      <Container>
         <Breadcrumbs>
            <BreadcrumbItem startContent={<IoHomeOutline />} onPress={() => router(ROUTES.home)}>Home</BreadcrumbItem>
            <BreadcrumbItem startContent={<IoCartOutline />} onPress={() => router(ROUTES.cart)}>Carrito</BreadcrumbItem>
            <BreadcrumbItem startContent={<IoDocumentTextOutline />}>Orden</BreadcrumbItem>
         </Breadcrumbs>
         <Spacer y={2} />
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
                  <Alert className="max-h-max" isVisible={!isLoading} title="Disfruta las tablaturas!!!" description="Son completamente gratis" />
               </Grid>
            </GridContainer>
         }
      </Container>
   )
};

export default Checkout;