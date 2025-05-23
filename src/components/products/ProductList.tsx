import { Card, CardBody, CardFooter } from '@heroui/react';
import { useNavigate as useRouter } from 'react-router-dom';
import { Between, HiddenTitle, Wrap, Title, ChipCategory, HiddenSubtitle } from '@styles';
import { IProduct } from "@interfaces"
import { FaSpotify } from '@icons';
import { CustomButtonLink, ProductSkeleton } from '@components';

interface IProps {
   category: string;
   icon?: React.ReactNode;
   products: IProduct[];
   isLoading?: boolean;
}

export const ProductList = ({ category, icon, products, isLoading = false }: IProps) => {
   const router = useRouter();
   return <>
      <div className='flex items-center gap-4 mb-4'>
         {icon && icon}
         <Title>{category}</Title>
      </div>
      {isLoading
         ? <ProductSkeleton />
         :
         <Wrap>
            {products.map(product => (
               <Card className="shadow-card" key={product.id} isHoverable isPressable onPress={() => router('/product/' + product.id)}>
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
         </Wrap>
      }
   </>
}