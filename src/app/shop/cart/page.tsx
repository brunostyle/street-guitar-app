import { Navigate, useNavigate } from "react-router";
import { IoCartOutline, IoCloudDownloadOutline, IoHomeOutline } from '@icons'
import { SectionTitle, SectionSubTitle, GridContainer, Grid, Container } from "@styles";
import { useCart, useUser } from "@state";
import { ROUTES } from "@navigation";
import { CustomButton, ProductCard, ProductOrder, notify } from "@components";
import type { IOrderCheckout } from "@interfaces";
import { useAddOrder } from "@hooks";
import { BreadcrumbItem, Breadcrumbs, Spacer } from "@heroui/react";

const Cart = () => {
   const router = useNavigate();
   const { addOrder, isAddingOrder } = useAddOrder();
   const { cart, total, items } = useCart();
   const { isLogged, user } = useUser();

   const handleCart = () => {
      if (!isLogged) return notify.error("Debes iniciar sesión");
      const order: IOrderCheckout = {
         items,
         total,
         paid: false,
         user: user?.id,
         products: cart.map(product => product.id)
      }
      addOrder(order);
   }

   return (
      (items < 1)
         ? <Navigate to={ROUTES.cartEmpty} />
         :
         <Container>
            <Breadcrumbs>
               <BreadcrumbItem startContent={<IoHomeOutline />} onPress={() => router(ROUTES.home)}>Home</BreadcrumbItem>
               <BreadcrumbItem startContent={<IoCartOutline />}>Carrito</BreadcrumbItem>
            </Breadcrumbs>
            <Spacer y={2} />
            <SectionTitle>Carrito</SectionTitle>
            <SectionSubTitle>Mis productos</SectionSubTitle>
            <GridContainer>
               <Grid>
                  <ProductCard page="cart" cart={cart} />
               </Grid>
               <Grid>
                  <ProductOrder page="cart" total={total} items={items}>
                     <CustomButton fullWidth color="primary" isLoading={isAddingOrder} startContent={<IoCloudDownloadOutline />} onPress={handleCart}>Ver tabs</CustomButton>
                  </ProductOrder>
               </Grid>
            </GridContainer>
         </Container>
   )
};

export default Cart;