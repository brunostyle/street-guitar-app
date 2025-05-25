import { Card, CardBody, Divider, Skeleton, Spacer, Spinner } from "@heroui/react";
import { useParams } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import { useEffect } from "react";
import { IoCartOutline, FaSpotify } from "@icons";
import { Between, Grid, GridContainer, Subtitle, Title, ChipCategory, Container } from "@styles";
import { useCart } from "@state";
import { useGetProduct } from "@hooks";
import "react-image-gallery/styles/css/image-gallery.css";
import { CustomButton, CustomButtonLink } from "@components";

const Product = () => {
   const { id } = useParams();
   const { addProductToCart } = useCart();
   const { product, isLoading } = useGetProduct(String(id));
   const images = product?.images.map(img => ({ original: img, thumbnail: img }))
   const handleAddToCart = () => addProductToCart(product!);
   useEffect(() => {
      window.scroll({ top: 0 });
   }, []);
   return (
      <Container>
         <Card className="max-w-[1200px] mx-auto" isBlurred>
            <GridContainer>
               <Grid>
                  {isLoading
                     ? <div className="grid place-content-center h-[500px]"><Spinner variant="spinner" /></div>
                     : <ImageGallery showThumbnails showPlayButton={false} showFullscreenButton={false} items={images} additionalClass="opacity-slow min-h-[500px]" />
                  }
               </Grid>
               <Grid>
                  <CardBody>
                     <Skeleton className="rounded-md" isLoaded={!isLoading}>
                        <Title>{product?.title}.</Title>
                     </Skeleton>
                     <Divider className="my-4" />
                     <Between>
                        <Skeleton className="rounded-md min-w-10" isLoaded={!isLoading}>
                           <Title>${product?.price}</Title>
                        </Skeleton>
                        <Skeleton className="rounded-md min-w-10" isLoaded={!isLoading}>
                           <ChipCategory>{product?.category}</ChipCategory>
                        </Skeleton>
                     </Between>
                     <Spacer y={4} />
                     <Skeleton className="rounded-md" isLoaded={!isLoading}>
                        <Title>Artista</Title>
                     </Skeleton>
                     <Spacer y={4} />
                     <Skeleton className="rounded-md" isLoaded={!isLoading}>
                        <Subtitle>{product?.description}</Subtitle>
                     </Skeleton>
                     <Spacer y={4} />
                     <Skeleton className="rounded-md" isLoaded={!isLoading}>
                        <CustomButtonLink to={product?.spotify} isButtonLink variant="solid" color="success" startContent={<FaSpotify size="1.5em" />}>Escuchala en spotify</CustomButtonLink>
                     </Skeleton>
                     <Spacer y={4} />
                     <Skeleton className="rounded-md" isLoaded={!isLoading}>
                        <CustomButton fullWidth color="primary" startContent={<IoCartOutline />} onPress={handleAddToCart}>Agregar al carrito</CustomButton>
                     </Skeleton>
                  </CardBody>
               </Grid>
            </GridContainer>
         </Card>
      </Container>
   )
}

export default Product;