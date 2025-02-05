import { Navigate } from "react-router-dom";
import { AiOutlineCreditCard } from '@icons'
import { SectionTitle, SectionSubTitle, GridContainer, Grid } from "@styles";
import { useCart, useUser } from "@state";
import { CustomButton, ProductCard, ProductOrder, notify } from "@components";
import { IOrderCheckout } from "@interfaces";
import { useAddOrder } from "@hooks";

const Cart = () => {
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
         ? <Navigate to="/cart/empty" />
         :
         <section>
            <SectionTitle>Carrito</SectionTitle>
            <SectionSubTitle>Mis productos</SectionSubTitle>
            <GridContainer>
               <Grid>
                  <ProductCard editable cart={cart} />
               </Grid>
               <Grid>
                  <ProductOrder editable total={total} items={items}>
                     <CustomButton fullWidth color="primary" isLoading={isAddingOrder} startContent={!isAddingOrder && <AiOutlineCreditCard />} onPress={handleCart}>Ver tabs</CustomButton>
                  </ProductOrder>
               </Grid>
            </GridContainer>
         </section>
   )
};

export default Cart;