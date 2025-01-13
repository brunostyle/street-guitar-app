import { Button, Card, CardBody, CardFooter, Spacer } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { IProduct } from "@interfaces"
import { AiFillDelete, FaCloudDownloadAlt } from '@icons'
import { HiddenTitle, Subtitle, Title, ChipCategory } from "@styles";
import { useCart } from "@state";

interface IProductCard {
   cart?: IProduct[];
   editable?: boolean;
   paid?: boolean;
}

export const ProductCard = ({ cart = [], paid, editable = false }: IProductCard) => {
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
               <Title>${product.price}</Title>
               {(paid && !editable) && <Button as={Link} to={product.pdf} target="_blank" download={product.title} variant="bordered" color="primary" size="sm" isIconOnly><FaCloudDownloadAlt /></Button>}
               {editable && <Button isIconOnly variant="bordered" size="sm" onPress={() => removeProductToCart(product)}><AiFillDelete /></Button>}
            </CardFooter>
         </Card>
      ))}
   </>
}