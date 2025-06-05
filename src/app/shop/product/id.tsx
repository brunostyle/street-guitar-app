import { BreadcrumbItem, Breadcrumbs, Card, CardBody, Chip, Skeleton, Spacer, Spinner } from "@heroui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { IoCartOutline, FaSpotify, IoHomeOutline, IoMusicalNoteSharp } from "@icons";
import { Between, Grid, GridContainer, Subtitle, ChipCategory, Container } from "@styles";
import { useCart } from "@state";
import { useGetProduct } from "@hooks";
import { CustomButton, CustomButtonLink, Gallery, Separator } from "@components";

const Product = () => {
   const router = useNavigate();
   const { id } = useParams();
   const { addProductToCart } = useCart();
   const { product, isLoading } = useGetProduct(String(id));
   const handleAddToCart = () => addProductToCart(product!);
   useEffect(() => {
      window.scroll({ top: 0 });
   }, []);
   return (
      <Container>
         <Breadcrumbs>
            <BreadcrumbItem startContent={<IoHomeOutline />} onPress={() => router('/')}>Home</BreadcrumbItem>
            <BreadcrumbItem startContent={<IoMusicalNoteSharp />}>Tablatura</BreadcrumbItem>
         </Breadcrumbs>
         <Spacer y={4} />
         <Card className="max-w-[1200px] mx-auto bg-gradient-to-t from-background via-default-50 to-background">
            <GridContainer>
               <Grid>
                  {isLoading
                     ? <div className="grid place-content-center h-[550px]"><Spinner color="default" variant="spinner" /></div>
                     : <Gallery images={product?.images} />
                  }
               </Grid>
               <Grid>
                  <CardBody className="flex flex-col gap-4">
                     <Skeleton className="rounded-md" isLoaded={!isLoading}>
                        <h1 className="text-xl">{product?.title}</h1>
                     </Skeleton>
                     <Skeleton className="rounded-md" isLoaded={!isLoading}>
                        <Separator>Descripción</Separator>
                     </Skeleton>
                     <Between>
                        <Skeleton className="rounded-md" isLoaded={!isLoading}>
                           <Subtitle>Artista:</Subtitle>
                        </Skeleton>
                        <Skeleton className="rounded-md" isLoaded={!isLoading}>
                           <h4 className="text-base">{product?.description}</h4>
                        </Skeleton>
                     </Between>
                     <Between>
                        <Skeleton className="rounded-md" isLoaded={!isLoading}>
                           <Subtitle>Categoria:</Subtitle>
                        </Skeleton>
                        <Skeleton className="rounded-md min-w-10" isLoaded={!isLoading}>
                           <ChipCategory>{product?.category}</ChipCategory>
                        </Skeleton>
                     </Between>
                     <Between>
                        <Skeleton className="rounded-md min-w-10" isLoaded={!isLoading}>
                           <div className="flex gap-2">
                              <span className="text-lg font-medium">${product?.price}</span>
                              <span className="text-sm line-through text-gray-500">$10</span>
                           </div>
                        </Skeleton>
                        <Skeleton className="rounded-md min-w-10" isLoaded={!isLoading}>
                           <Chip size="sm" color="success" variant="flat">Gratis</Chip>
                        </Skeleton>
                     </Between>
                     <Skeleton className="rounded-md" isLoaded={!isLoading}>
                        <CustomButtonLink to={product?.spotify} isButtonLink variant="solid" color="success" startContent={<FaSpotify size="1.5em" />}>Escuchala en spotify</CustomButtonLink>
                     </Skeleton>
                     <Skeleton className="rounded-md" isLoaded={!isLoading}>
                        <CustomButton fullWidth color="primary" startContent={<IoCartOutline />} onPress={handleAddToCart}>Agregar al carrito</CustomButton>
                     </Skeleton>
                  </CardBody>
               </Grid>
            </GridContainer>
         </Card>
      </Container >
   )
}

export default Product;