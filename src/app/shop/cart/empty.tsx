import { useNavigate as useRouter } from "react-router";
import { CustomButton, Nothing } from "@components";
import { IoHomeOutline } from '@icons';
import { Container, Pattern } from "@styles";
import { ROUTES } from "@navigation";

export const CartEmpty = () => {
   const router = useRouter();

   return (
      <Pattern mask>
         <Container>
            <Nothing text="Tu carrito esta vacío." svg="/cart.svg">
               <CustomButton fullWidth onPress={() => router(ROUTES.home)} icon={<IoHomeOutline />}>Ir a la tienda</CustomButton>
            </Nothing>
         </Container>
      </Pattern>
   )
};