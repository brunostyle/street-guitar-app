import { Button } from "@nextui-org/react";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineCreditCard } from '@icons'
import { SectionTitle, SectionSubTitle, GridContainer, Grid } from "@styles";
import { useCart, useUser } from "@state";
import { ProductCard, ProductOrder } from "@components";
import { IOrderCheckout } from "@interfaces";
import { useAddOrder } from "@hooks";

const Cart = () => {
   const { addOrder, isAddingOrder } = useAddOrder();
   const { cart, total, items } = useCart();
   const { isLogged, user } = useUser();

   const handleCart = () => {
      if (!isLogged) return toast.error("Debes iniciar sesión");
      const order: IOrderCheckout = {
         items,
         total,
         paid: true,
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
                     <Button fullWidth size="sm" color="primary" isLoading={isAddingOrder} startContent={!isAddingOrder && <AiOutlineCreditCard />} onPress={handleCart}>Ver tabs</Button>
                  </ProductOrder>
               </Grid>
            </GridContainer>
         </section>
   )
};

export default Cart;