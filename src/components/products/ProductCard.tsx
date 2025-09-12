import { Card, CardBody, CardFooter } from "@heroui/react";
import { Link } from "react-router";
import type { IProduct } from "@interfaces"
import { CustomButtonIcon, CustomButtonLink } from "@components"
import { IoTrashOutline, IoCloudDownloadOutline, FaSpotify } from '@icons'
import { HiddenTitle, Subtitle, ChipCategory } from "@styles";
import { useCart } from "@state";
import { ROUTES } from "@navigation";

interface IProductCard {
   page: 'cart' | 'checkout';
   cart?: IProduct[];
   paid?: boolean;
}

export const ProductCard = ({ cart = [], page }: IProductCard) => {
   const { removeProductToCart } = useCart();
   return <>
      {cart.map(product => (
         <Card key={product.id} className="grid grid-cols-[2fr_10fr_auto] shadow-outset">
            <Link to={ROUTES.product + product.id} className="h-28">
               <img src={product.images[0]} alt={product.title} className="w-full h-full rounded-none object-cover" />
            </Link>
            <CardBody className="flex flex-col justify-between">
               <div>
                  <HiddenTitle>{product.title}</HiddenTitle>
                  <Subtitle>{product.description}</Subtitle>
               </div>
               <ChipCategory>{product.category}</ChipCategory>
            </CardBody>
            <CardFooter className="flex flex-col justify-between">
               <CustomButtonLink to={product?.spotify} variant="light" color="success"><FaSpotify size="1.6em" /></CustomButtonLink>
               {(page === "checkout" && product.pdf) && <CustomButtonLink to={product.pdf} download={product.tab} color="primary"><IoCloudDownloadOutline /></CustomButtonLink>}
               {page === "cart" && <CustomButtonIcon onPress={() => removeProductToCart(product)}><IoTrashOutline /></CustomButtonIcon>}
            </CardFooter>
         </Card>
      ))}
   </>
}