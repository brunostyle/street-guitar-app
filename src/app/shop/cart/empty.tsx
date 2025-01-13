import { Button } from "@nextui-org/react";
import { useNavigate as useRouter } from "react-router-dom";
import { Nothing } from "@components";
import { AiOutlineHome } from '@icons';

const Empty = () => {
   const router = useRouter();

   return (
      <Nothing text="Tu carrito esta vacío." svg="/cart.svg">
         <Button size="sm" color="primary" onPress={() => router('/')} startContent={<AiOutlineHome />}>Ir a la tienda</Button>
      </Nothing>
   )
};

export default Empty;
