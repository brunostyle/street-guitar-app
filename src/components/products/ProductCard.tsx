import { Card, CardBody, CardFooter } from "@heroui/react";
import { Link } from "react-router-dom";
import { IProduct } from "@interfaces"
import { CustomButtonIcon, CustomButtonLink } from "@components"
import { IoTrashOutline, IoCloudDownloadOutline, FaSpotify } from '@icons'
import { HiddenTitle, Subtitle, ChipCategory } from "@styles";
import { useCart } from "@state";

interface IProductCard {
   cart?: IProduct[];
   editable?: boolean;
   paid?: boolean;
}

export const ProductCard = ({ cart = [], editable = false }: IProductCard) => {
   const { removeProductToCart } = useCart();
   return <>
      {cart.map(product => (
         <Card key={product.id} className="grid grid-cols-12 shadow-outset">
            <Link to={"/product/" + product.id} className="col-span-2 h-28">
               <img src={product.images[0]} alt={product.title} className="w-full h-full rounded-none object-cover" />
            </Link>
            <CardBody className="col-span-8 flex flex-col justify-between">
               <div>
                  <HiddenTitle>{product.title}</HiddenTitle>
                  <Subtitle>{product.description}</Subtitle>
               </div>
               <ChipCategory>{product.category}</ChipCategory>
            </CardBody>
            <CardFooter className="col-span-2 flex flex-col justify-between">
               <CustomButtonLink to={product?.spotify} variant="light" color="success"><FaSpotify size="1.6em" /></CustomButtonLink>
               {(!editable && product.pdf) && <CustomButtonLink to={product.pdf} download={product.tab} color="primary"><IoCloudDownloadOutline /></CustomButtonLink>}
               {editable && <CustomButtonIcon onPress={() => removeProductToCart(product)}><IoTrashOutline /></CustomButtonIcon>}
            </CardFooter>
         </Card>
      ))}
   </>
}