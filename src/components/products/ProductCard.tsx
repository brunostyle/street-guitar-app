import { Button, Card, CardBody, CardFooter, Spacer } from "@heroui/react";
import { Link } from "react-router-dom";
import { IProduct } from "@interfaces"
import { AiFillDelete, FaGuitar, FaSpotify } from '@icons'
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
         <Card key={product.id} className="grid grid-cols-12 mb-4">
            <Link to={"/product/" + product.id} className="col-span-2 h-28">
               <img src={product.images[0]} alt={product.title} className="w-full h-full rounded-none object-cover" />
            </Link>
            <CardBody className="col-span-8">
               <HiddenTitle>{product.title}</HiddenTitle>
               <Subtitle>{product.description}</Subtitle>
               <Spacer y={4} />
               <ChipCategory>{product.category}</ChipCategory>
            </CardBody>
            <CardFooter className="col-span-2 flex flex-col justify-between">
               <Button as={Link} to={product?.spotify} target="_blank" isIconOnly size="sm" variant="light" color="success"><FaSpotify size="1.6em" /></Button>
               {(!editable && product.pdf) && <Button as={Link} to={product.pdf} target="_blank" download={product.tab} variant="bordered" color="primary" size="sm" isIconOnly><FaGuitar /></Button>}
               {editable && <Button isIconOnly variant="bordered" size="sm" onPress={() => removeProductToCart(product)}><AiFillDelete /></Button>}
            </CardFooter>
         </Card>
      ))}
   </>
}