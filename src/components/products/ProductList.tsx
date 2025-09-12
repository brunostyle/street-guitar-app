import { Card, CardBody, CardFooter, Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from '@heroui/react';
import { useNavigate as useRouter } from 'react-router';
import { Between, HiddenTitle, WrapFill, Title, ChipCategory, HiddenSubtitle, Flex, Gap } from '@styles';
import type { IProduct } from "@interfaces"
import { FaSpotify, IoFilterOutline } from '@icons';
import { CustomButtonLink, Difficulty, ProductSkeleton } from '@components';
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
         <Between>
            <Flex>
               {icon && icon}
               <Title>{category}</Title>
            </Flex>
            <Dropdown className="min-w-fit">
               <DropdownTrigger>
                  <Button variant="light" size="sm" startContent={<IoFilterOutline />}>Dificultad</Button>
               </DropdownTrigger>
               <DropdownMenu variant="flat" aria-label="filtrado de productos" onAction={difficulty => router(ROUTES.difficulty + difficulty)}>
                  <DropdownSection className="mb-0">
                     <DropdownItem key="1" showDivider className="p-0"><Difficulty difficulty={1} /></DropdownItem>
                     <DropdownItem key="2" showDivider className="p-0"><Difficulty difficulty={2} /></DropdownItem>
                     <DropdownItem key="3" showDivider className="p-0"><Difficulty difficulty={3} /></DropdownItem>
                     <DropdownItem key="4" showDivider className="p-0"><Difficulty difficulty={4} /></DropdownItem>
                     <DropdownItem key="5" className="p-0"><Difficulty difficulty={5} /></DropdownItem>
                  </DropdownSection>
               </DropdownMenu>
            </Dropdown>
         </Between>
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