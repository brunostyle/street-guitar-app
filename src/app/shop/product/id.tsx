import { Avatar, AvatarFallback, Card, CardContent, Chip, ChipLabel, Description, Label, Separator, Skeleton } from "@heroui/react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { IoCartOutline, FaSpotify, IoHomeOutline, IoMusicalNoteSharp, IoStatsChartOutline, IoShieldCheckmarkOutline, IoDocumentTextOutline, IoDownloadOutline, IoLaptopOutline, IoRibbonOutline } from "@icons";
import { Between, Grid, GridContainer, ChipCategory, Container, Gap, ChipCuston, Flex, Pattern } from "@styles";
import { useCart } from "@state";
import { useGetProduct } from "@hooks";
import { CustomBreadcrumbs, CustomButton, CustomButtonLink, Difficulty, Gallery } from "@components";
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
      <Pattern mask>
         <Container>
            <CustomBreadcrumbs breadcrumbs={breadcrumbs} />
            <Card className="bg-transparent mb-16">
               <GridContainer>
                  <Grid>
                     <Gallery images={product?.images!} isLoading={isLoading} />
                  </Grid>
                  <Grid>
                     <CardContent>
                        <Gap>
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-1/6 h-5" />
                              : <ChipCuston>
                                 <IoStatsChartOutline />
                                 <ChipLabel>Popular</ChipLabel>
                              </ChipCuston>
                           }
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-3/6 h-5" />
                              : <h1 className="text-2xl font-semibold">{product?.title}</h1>
                           }
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-7/12 h-10" />
                              : <Description>Tablatura completa en guitarra de la cancion "{product?.title}". <br /> Incluye acordes, tabs y estructura de la canción.</Description>
                           }
                           {isLoading
                              ? <Skeleton className="rounded-3xl h-5" />
                              : <Separator />
                           }
                           <Between>
                              {isLoading
                                 ? <Skeleton className="rounded-3xl w-16 h-5" />
                                 : <Description>Dificultad:</Description>
                              }
                              {isLoading
                                 ? <Skeleton className="rounded-3xl w-40 h-5" />
                                 : <Difficulty difficulty={product?.difficulty!} />
                              }
                           </Between>
                           <Between>
                              {isLoading
                                 ? <Skeleton className="rounded-3xl w-11 h-5" />
                                 : <Description>Artista:</Description>
                              }
                              {isLoading
                                 ? <Skeleton className="rounded-3xl w-20 h-5" />
                                 : <Label className="text-accent">{product?.description}</Label>
                              }
                           </Between>
                           <Between>
                              {isLoading
                                 ? <Skeleton className="rounded-3xl w-14 h-5" />
                                 : <Description>Categoria:</Description>
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
                                    <span className="text-2xl font-medium">${product?.price}</span>
                                    <span className="text-lg line-through text-gray-500">$10</span>
                                 </div>

                              }
                              {isLoading
                                 ? <Skeleton className="rounded-3xl w-12 h-5" />
                                 : <Chip size="sm" color="success">Gratis</Chip>
                              }
                           </Between>
                           {isLoading
                              ? <Skeleton className="rounded-3xl h-9" />
                              : <CustomButtonLink size="lg" to={product?.spotify!} variant="primary" className="bg-success" isButtonLink icon={<FaSpotify />}>Escuchala en spotify</CustomButtonLink>
                           }
                           {isLoading
                              ? <Skeleton className="rounded-3xl h-9" />
                              : <CustomButton size="md" fullWidth icon={<IoCartOutline />} onPress={() => addProductToCart(product!)}>Agregar al carrito</CustomButton>
                           }
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-2/6 h-5" />
                              : <Chip variant="tertiary" className="text-muted">
                                 <IoShieldCheckmarkOutline className="text-accent" size="1.3em" />
                                 <ChipLabel>Compra segura y acceso inmediato</ChipLabel>
                              </Chip>
                           }
                           {isLoading
                              ? <Skeleton className="rounded-3xl w-full h-16" />
                              : <Card className="grid grid-cols-2 xl:grid-cols-4 shadow-outset backdrop-blur-xs bg-transparent">
                                 <Flex>
                                    <Avatar color="accent" variant="soft" className="shadow-outset">
                                       <AvatarFallback>
                                          <IoDocumentTextOutline size="1.5em" />
                                       </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                       <Label>Tablatura</Label>
                                       <Description>100% precisa</Description>
                                    </div>
                                 </Flex>
                                 <Flex>
                                    <Separator orientation="vertical" />
                                    <Avatar color="accent" variant="soft" className="shadow-outset">
                                       <AvatarFallback>
                                          <IoDownloadOutline size="1.5em" />
                                       </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                       <Label>Descarga</Label>
                                       <Description>Inmediata</Description>
                                    </div>
                                 </Flex>
                                 <Flex>
                                    <Separator className="hidden xl:block" orientation="vertical" />
                                    <Avatar color="accent" variant="soft" className="shadow-outset">
                                       <AvatarFallback>
                                          <IoLaptopOutline size="1.5em" />
                                       </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                       <Label>Compatible</Label>
                                       <Description>Multiple</Description>
                                    </div>
                                 </Flex>
                                 <Flex>
                                    <Separator orientation="vertical" />
                                    <Avatar color="warning" variant="soft" className="shadow-outset">
                                       <AvatarFallback>
                                          <IoRibbonOutline size="1.5em" />
                                       </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                       <Label>Calidad SG</Label>
                                       <Description>Profesional</Description>
                                    </div>
                                 </Flex>
                              </Card>
                           }
                        </Gap>
                     </CardContent>
                  </Grid>
               </GridContainer>
            </Card>
         </Container >
      </Pattern>
   )
}