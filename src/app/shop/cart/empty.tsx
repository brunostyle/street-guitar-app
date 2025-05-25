import { useNavigate as useRouter } from "react-router-dom";
import { CustomButton, Nothing } from "@components";
import { IoHomeOutline } from '@icons';
import { Container } from "@styles";

const Empty = () => {
   const router = useRouter();

   return (
      <Container>
         <Nothing text="Tu carrito esta vacío." svg="/cart.svg">
            <CustomButton color="primary" onPress={() => router('/')} startContent={<IoHomeOutline />}>Ir a la tienda</CustomButton>
         </Nothing>
      </Container>
   )
};

export default Empty;
