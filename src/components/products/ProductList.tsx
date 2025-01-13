import { Card, CardBody, CardFooter } from '@nextui-org/react';
import { useNavigate as useRouter } from 'react-router-dom';
import { Between, HiddenTitle, Wrap, Title, ChipCategory } from '@styles';
import { IProduct } from "@interfaces"

interface IProps {
   category: string;
   icon?: React.ReactNode;
   products: IProduct[];
}

export const ProductList = ({ category, icon, products }: IProps) => {
   const router = useRouter();
   return <>
      <div className='flex items-center gap-4 mb-4'>
         {icon && icon}
         <Title>{category}</Title>
      </div>
      <Wrap>
         {products.map(product => (
            <Card key={product.id} isHoverable isPressable onPress={() => router('/product/' + product.id)}>
               <img src={product.images.at(0)} alt={product.title} className="w-full h-full min-h-64 rounded-none object-cover" />
               <CardBody>
                  <HiddenTitle>{product.title}</HiddenTitle>
               </CardBody>
               <CardFooter>
                  <Between>
                     <ChipCategory>{product.category}</ChipCategory>
                     <Title>${product.price}</Title>
                  </Between>
               </CardFooter>
            </Card>
         ))}
      </Wrap>
   </>
}