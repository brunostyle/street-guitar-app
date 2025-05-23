import { useNavigate as useRouter } from "react-router-dom";
import { CustomButton, Nothing } from "@components";
import { IoHomeOutline } from '@icons';

const Empty = () => {
   const router = useRouter();

   return (
      <Nothing text="Tu carrito esta vacío." svg="/cart.svg">
         <CustomButton color="primary" onPress={() => router('/')} startContent={<IoHomeOutline />}>Ir a la tienda</CustomButton>
      </Nothing>
   )
};

export default Empty;
