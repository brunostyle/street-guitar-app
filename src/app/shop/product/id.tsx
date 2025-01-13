import { Button, Card, CardBody, Divider, Skeleton, Spacer, Spinner } from "@nextui-org/react";
import { Link, useParams } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import { useEffect } from "react";
import { FiShoppingCart, FaSpotify } from "@icons";
import { Between, Grid, GridContainer, Subtitle, Title, ChipCategory } from "@styles";
import { useCart } from "@state";
import { useGetProduct } from "@hooks";
import "react-image-gallery/styles/css/image-gallery.css";

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
      <Card className="max-w-[1200px] mx-auto" isBlurred>
         <GridContainer>
            <Grid>
               {isLoading
                  ? <div className="grid place-content-center h-[500px]"><Spinner /></div>
                  : <ImageGallery showThumbnails showPlayButton={false} showFullscreenButton={false} items={images} additionalClass="opacity-slow min-h-[500px]" />
               }
            </Grid>
            <Grid>
               <CardBody>
                  <Skeleton className="rounded-md" isLoaded={!isLoading}>
                     <Title>{product?.title}.</Title>
                  </Skeleton>
                  <Divider />
                  <Spacer y={4} />
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
                     <Button as={Link} to={product?.spotify} target="_blank" fullWidth color="success" size="sm" startContent={<FaSpotify size="1.5em" />}>Escuchala en spotify</Button>
                  </Skeleton>
                  <Spacer y={4} />
                  <Skeleton className="rounded-md" isLoaded={!isLoading}>
                     <Button fullWidth color="primary" size="sm" startContent={<FiShoppingCart />} onPress={handleAddToCart}>Agregar al carrito</Button>
                  </Skeleton>
               </CardBody>
            </Grid>
         </GridContainer>
      </Card>
   )
}

export default Product;