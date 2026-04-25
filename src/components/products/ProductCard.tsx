import { Alert, AlertContent, AlertDescription, AlertIndicator, AlertTitle, Avatar, AvatarFallback, AvatarImage, Card, CardContent, CardFooter, Description } from "@heroui/react";
import { Link } from "react-router";
import type { IProduct } from "@interfaces"
import { CustomButtonIcon, CustomButtonLink } from "@components"
import { IoTrashOutline, IoCloudDownloadOutline, FaSpotify, IoImageOutline } from '@icons'
import { HiddenTitle, ChipCategory } from "@styles";
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
         <Card key={product.id} className="grid grid-cols-[2fr_10fr_auto] shadow-outset p-0 ">
            <Link to={ROUTES.product + product.id} className="h-28">
               <Avatar className="w-full h-full rounded-none">
                  <AvatarImage src={product.images[0]} alt={product.title} className="object-cover" />
                  <AvatarFallback><IoImageOutline /></AvatarFallback>
               </Avatar>
            </Link>
            <CardContent className="flex flex-col justify-between py-2">
               <div>
                  <HiddenTitle>{product.title}</HiddenTitle>
                  <Description>{product.description}</Description>
               </div>
               <div>
                  <ChipCategory>{product.category}</ChipCategory>
               </div>
            </CardContent>
            <CardFooter className="flex flex-col justify-between p-2">
               <CustomButtonLink to={product?.spotify} variant="ghost"><span><FaSpotify className="text-success size-[1.6em]" /></span></CustomButtonLink>
               {(page === "checkout" && product.pdf) && <CustomButtonLink to={product.pdf} download={product.tab}><IoCloudDownloadOutline /></CustomButtonLink>}
               {page === "cart" && <CustomButtonIcon onPress={() => removeProductToCart(product)}><IoTrashOutline /></CustomButtonIcon>}
            </CardFooter>
         </Card>
      ))}
      <Alert status="accent" className="shadow-outset bg-center" style={{ backgroundImage: 'url(/pattern.svg)' }}>
         <AlertIndicator>
            <Avatar variant="soft" size="lg">
               <AvatarImage src="/tabs.png" />
            </Avatar>
         </AlertIndicator>
         <AlertContent>
            <AlertTitle>¡Disfruta tus tablaturas!</AlertTitle>
            <AlertDescription>
               Todas las tablaturas de tu orden son completamente gratis.
            </AlertDescription>
         </AlertContent>
      </Alert>

   </>
}