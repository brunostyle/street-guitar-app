import { BreadcrumbItem, Breadcrumbs, Card, CardBody, Chip, Skeleton, Spacer } from "@heroui/react";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { IoCartOutline, FaSpotify, IoHomeOutline, IoMusicalNoteSharp } from "@icons";
import { Between, Grid, GridContainer, Subtitle, ChipCategory, Container, Gap } from "@styles";
import { useCart } from "@state";
import { useGetProduct } from "@hooks";
import { CustomButton, CustomButtonLink, Difficulty, Gallery, Separator } from "@components";
import { ROUTES } from "@navigation";

const Product = () => {
   const router = useNavigate();
   const { id } = useParams();
   const { addProductToCart } = useCart();
   const { product, isLoading } = useGetProduct(String(id));

   useEffect(() => {
      window.scroll({ top: 0 });
   }, []);

   return (
      <Container>
         <Breadcrumbs>
            <BreadcrumbItem startContent={<IoHomeOutline />} onPress={() => router(ROUTES.home)}>Home</BreadcrumbItem>
            <BreadcrumbItem startContent={<IoMusicalNoteSharp />}>Tablatura</BreadcrumbItem>
         </Breadcrumbs>
         <Spacer y={4} />
         <Card>
            <GridContainer>
               <Grid>
                  <Gallery images={product?.images!} isLoading={isLoading} />
               </Grid>
               <Grid>
                  <CardBody>
                     <Gap>
                        <Skeleton className="rounded-md" isLoaded={!isLoading}>
                           <h1 className="text-xl">{product?.title}</h1>
                        </Skeleton>
                        <Skeleton className="rounded-md" isLoaded={!isLoading}>
                           <Separator>Descripción</Separator>
                        </Skeleton>
                        <Between>
                           <Skeleton className="rounded-md" isLoaded={!isLoading}>
                              <Subtitle>Dificultad:</Subtitle>
                           </Skeleton>
                           <Skeleton className="rounded-md" isLoaded={!isLoading}>
                              <Difficulty difficulty={product?.difficulty!} />
                           </Skeleton>
                        </Between>
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
                              <ChipCategory>{product?.category!}</ChipCategory>
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
                           <CustomButtonLink to={product?.spotify!} isButtonLink variant="solid" color="success" startContent={<FaSpotify size="1.5em" />}>Escuchala en spotify</CustomButtonLink>
                        </Skeleton>
                        <Skeleton className="rounded-md" isLoaded={!isLoading}>
                           <CustomButton fullWidth color="primary" startContent={<IoCartOutline />} onPress={() => addProductToCart(product!)}>Agregar al carrito</CustomButton>
                        </Skeleton>
                     </Gap>
                  </CardBody>
               </Grid>
            </GridContainer>
         </Card>
      </Container >
   )
}

export default Product;