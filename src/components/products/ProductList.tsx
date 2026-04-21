import { Card, CardContent, CardFooter, Dropdown, DropdownMenu, DropdownSection, DropdownItem, Button, DropdownPopover, Separator, Avatar, AvatarImage, AvatarFallback } from '@heroui/react';
import { useNavigate as useRouter } from 'react-router';
import { Between, HiddenTitle, WrapFill, Title, ChipCategory, HiddenSubtitle, Flex, Gap } from '@styles';
import type { IProduct } from "@interfaces"
import { FaSpotify, IoFilterOutline, IoImageOutline } from '@icons';
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
            <Dropdown>
               <Button variant="ghost" size="sm"><IoFilterOutline />Dificultad</Button>
               <DropdownPopover className="min-w-fit">
                  <DropdownMenu aria-label="filtrado de productos" onAction={difficulty => router(ROUTES.difficulty + difficulty)}>
                     <DropdownSection>
                        <DropdownItem id="1"><Difficulty difficulty={1} /></DropdownItem>
                        <Separator />
                        <DropdownItem id="2"><Difficulty difficulty={2} /></DropdownItem>
                        <Separator />
                        <DropdownItem id="3"><Difficulty difficulty={3} /></DropdownItem>
                        <Separator />
                        <DropdownItem id="4"><Difficulty difficulty={4} /></DropdownItem>
                        <Separator />
                        <DropdownItem id="5"><Difficulty difficulty={5} /></DropdownItem>
                     </DropdownSection>
                  </DropdownMenu>
               </DropdownPopover>
            </Dropdown>
         </Between>
         {isLoading
            ? <ProductSkeleton />
            :
            <WrapFill>
               {products.map(product => (
                  <Card className="shadow-outset p-0 cursor-pointer" key={product.id} onClick={() => router(ROUTES.product + product.id)}>
                     <Avatar className="w-full min-h-92.5 rounded-none opacity">
                        <AvatarImage src={product.images[0]} alt={product.title} className="object-cover" />
                        <AvatarFallback><IoImageOutline /></AvatarFallback>
                     </Avatar>
                     <CardContent className="px-2">
                        <HiddenTitle>{product.title}</HiddenTitle>
                        <HiddenSubtitle>{product.description}</HiddenSubtitle>
                     </CardContent>
                     <CardFooter className="p-2 pt-0">
                        <Between>
                           <ChipCategory>{product.category}</ChipCategory>
                           <CustomButtonLink to={product?.spotify} variant="ghost"><span><FaSpotify className="text-success size-[1.6em]" /></span></CustomButtonLink>
                        </Between>
                     </CardFooter>
                  </Card>
               ))}
            </WrapFill>
         }
      </Gap>
   )
}