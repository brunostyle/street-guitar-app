import { Card, CardBody, CardFooter } from '@heroui/react';
import { useNavigate as useRouter } from 'react-router-dom';
import { Between, HiddenTitle, WrapFill, Title, ChipCategory, HiddenSubtitle, Flex, Gap } from '@styles';
import { IProduct } from "@interfaces"
import { FaSpotify } from '@icons';
import { CustomButtonLink, ProductSkeleton } from '@components';
import { ROUTES } from '@navigation';

interface IProps {
   category: string;
   icon?: React.ReactNode;
   products: IProduct[];
   isLoading?: boolean;
}

export const ProductList = ({ category, icon, products, isLoading = false }: IProps) => {
   const router = useRouter();
   return (
      <Gap>
         <Flex>
            {icon && icon}
            <Title>{category}</Title>
         </Flex>
         {isLoading
            ? <ProductSkeleton />
            :
            <WrapFill>
               {products.map(product => (
                  <Card className="shadow-outset" key={product.id} isHoverable isPressable onPress={() => router(ROUTES.product + product.id)}>
                     <img src={product.images[0]} alt={product.title} className="w-full h-full min-h-64 rounded-none object-cover opacity" />
                     <CardBody>
                        <HiddenTitle>{product.title}</HiddenTitle>
                        <HiddenSubtitle>{product.description}</HiddenSubtitle>
                     </CardBody>
                     <CardFooter>
                        <Between>
                           <ChipCategory>{product.category}</ChipCategory>
                           <CustomButtonLink to={product?.spotify} variant="light" color="success"><FaSpotify size="1.6em" /></CustomButtonLink>
                        </Between>
                     </CardFooter>
                  </Card>
               ))}
            </WrapFill>
         }
      </Gap>
   )
}