import { useNavigate as useRouter } from "react-router-dom";
import { CustomButton, Nothing } from "@components";
import { IoHomeOutline } from '@icons';
import { Container, Pattern } from "@styles";

const Empty = () => {
   const router = useRouter();

   return (
      <Pattern mask>
         <Container>
            <Nothing text="Tu carrito esta vacío." svg="/cart.svg">
               <CustomButton color="primary" onPress={() => router('/')} startContent={<IoHomeOutline />}>Ir a la tienda</CustomButton>
            </Nothing>
         </Container>
      </Pattern>
   )
};

export default Empty;
