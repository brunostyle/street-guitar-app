import { useNavigate as useRouter } from "react-router-dom";
import { CustomButton, Nothing } from "@components";
import { AiOutlineHome } from '@icons';

const Empty = () => {
   const router = useRouter();

   return (
      <Nothing text="Tu carrito esta vacío." svg="/cart.svg">
         <CustomButton color="primary" onPress={() => router('/')} startContent={<AiOutlineHome />}>Ir a la tienda</CustomButton>
      </Nothing>
   )
};

export default Empty;
