import { Card, CardContent, Chip, Label, Skeleton } from "@heroui/react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { IoCartOutline, FaSpotify, IoHomeOutline, IoMusicalNoteSharp } from "@icons";
import { Between, Grid, GridContainer, Subtitle, ChipCategory, Container, Gap } from "@styles";
import { useCart } from "@state";
import { useGetProduct } from "@hooks";
import { CustomBreadcrumbs, CustomButton, CustomButtonLink, Difficulty, Gallery, Divider } from "@components";
import { ROUTES } from "@navigation";

const breadcrumbs = [
   { title: 'Home', route: ROUTES.home, icon: <IoHomeOutline /> },
   { title: 'Tablatura', route: '', icon: <IoMusicalNoteSharp /> },
]

export const Product = () => {
   const { id } = useParams();
   const { addProductToCart } = useCart();
   const { product, isLoading } = useGetProduct(String(id));

   useEffect(() => {
      window.scroll({ top: 0 });
   }, []);

   return (
      <Container>
         <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
         <Card>
            <GridContainer>
               <Grid>
                  <Gallery images={product?.images!} isLoading={isLoading} />
               </Grid>
               <Grid>
                  <CardContent>
                     <Gap>
                        {isLoading
                           ? <Skeleton className="rounded-3xl w-3/6 h-5" />
                           : <h1 className="text-xl">{product?.title}</h1>
                        }
                        {isLoading
                           ? <Skeleton className="rounded-3xl h-5" />
                           : <Divider>Descripción</Divider>
                        }
                        <Between>
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-16 h-5" />
                              : <Subtitle>Dificultad:</Subtitle>
                           }
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-40 h-5" />
                              : <Difficulty difficulty={product?.difficulty!} />
                           }
                        </Between>
                        <Between>
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-11 h-5" />
                              : <Subtitle>Artista:</Subtitle>
                           }
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-20 h-5" />
                              : <Label>{product?.description}</Label>
                           }
                        </Between>
                        <Between>
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-14 h-5" />
                              : <Subtitle>Categoria:</Subtitle>
                           }
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-20 h-5" />
                              : <ChipCategory>{product?.category!}</ChipCategory>
                           }
                        </Between>
                        <Between>
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-14 h-5" />
                              : <div className="flex gap-2">
                                 <span className="text-lg font-medium">${product?.price}</span>
                                 <span className="text-sm line-through text-gray-500">$10</span>
                              </div>

                           }
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-12 h-5" />
                              : <Chip size="sm" color="success">Gratis</Chip>
                           }
                        </Between>
                        {isLoading
                           ? <Skeleton className="rounded-3xl h-9" />
                           : <CustomButtonLink to={product?.spotify!} variant="primary" className="bg-success text-black" isButtonLink icon={<FaSpotify />}>Escuchala en spotify</CustomButtonLink>
                        }
                        {isLoading
                           ? <Skeleton className="rounded-3xl h-9" />
                           : <CustomButton fullWidth icon={<IoCartOutline />} onPress={() => addProductToCart(product!)}>Agregar al carrito</CustomButton>
                        }
                     </Gap>
                  </CardContent>
               </Grid>
            </GridContainer>
         </Card>
      </Container >
   )
}