import { Navigate } from "react-router";
import { IoCartOutline, IoCloudDownloadOutline, IoHomeOutline } from '@icons'
import { SectionTitle, SectionSubTitle, GridContainer, Grid, Container } from "@styles";
import { useCart, useUser } from "@state";
import { ROUTES } from "@navigation";
import { CustomBreadcrumbs, CustomButton, ProductCard, ProductOrder, notify } from "@components";
import type { IOrderCheckout } from "@interfaces";
import { useAddOrder } from "@hooks";

const breadcrumbs = [
   { title: 'Home', route: ROUTES.home, icon: <IoHomeOutline /> },
   { title: 'Carrito', route: ROUTES.home, icon: <IoCartOutline /> },
]

export const Cart = () => {
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
            <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
            <SectionTitle>Carrito</SectionTitle>
            <SectionSubTitle>Mis productos</SectionSubTitle>
            <GridContainer>
               <Grid>
                  <ProductCard page="cart" cart={cart} />
               </Grid>
               <Grid>
                  <ProductOrder page="cart" total={total} items={items}>
                     <CustomButton fullWidth isLoading={isAddingOrder} icon={<IoCloudDownloadOutline />} onPress={handleCart}>Ver tabs</CustomButton>
                  </ProductOrder>
               </Grid>
            </GridContainer>
         </Container>
   )
};