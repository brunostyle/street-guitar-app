import { Avatar, AvatarFallback, AvatarImage, Table, TableBody, TableCell, TableColumn, TableContent, TableFooter, TableHeader, TableRow, TableScrollContainer } from "@heroui/react";
import { useNavigate } from "react-router";
import { IoPencil, IoEyeOutline, IoImageOutline, IoPricetagsOutline } from "@icons";
import { FullScreenLoading, Admin, Nothing, CustomButtonIcon, CustomButtonLink, Difficulty, CustomPagination } from "@components";
import { HiddenTitle, HiddenSubtitle, ChipCategory } from "@styles";
import { usePaginateProducts } from "@hooks";
import { ROUTES } from "@navigation";

export const Products = () => {
   const router = useNavigate();
   const { products = [], isEmpty, isLoading, page, setPage, total } = usePaginateProducts();
   return (
      <Admin show="title-input-button" title="Productos" icon={<IoPricetagsOutline />}>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text="Aún no hay productos" svg="/nothing.svg" />
               :
               <Table className="table" variant="secondary">
                  <TableScrollContainer>
                     <TableContent aria-label="Products">
                        <TableHeader>
                           <TableColumn>IMAGEN</TableColumn>
                           <TableColumn>TITULO</TableColumn>
                           <TableColumn>DESCRIPCIÓN</TableColumn>
                           <TableColumn>PRECIO</TableColumn>
                           <TableColumn>DIFICULTAD</TableColumn>
                           <TableColumn>CATEGORIA</TableColumn>
                           <TableColumn>TAB</TableColumn>
                           <TableColumn>EDITAR</TableColumn>
                        </TableHeader>
                        <TableBody>
                           {products.map((product) => (
                              <TableRow key={product.id}>
                                 <TableCell>
                                    <Avatar size="sm" className="rounded-sm">
                                       <AvatarImage src={product.images[0]} />
                                       <AvatarFallback><IoImageOutline /></AvatarFallback>
                                    </Avatar>
                                 </TableCell>
                                 <TableCell><HiddenTitle>{product.title}</HiddenTitle></TableCell>
                                 <TableCell><HiddenSubtitle>{product.description}</HiddenSubtitle></TableCell>
                                 <TableCell><h4>${product.price}</h4></TableCell>
                                 <TableCell><Difficulty difficulty={product.difficulty} /></TableCell>
                                 <TableCell><ChipCategory>{product.category}</ChipCategory></TableCell>
                                 <TableCell><CustomButtonLink to={product.pdf!} isDisabled={!product.pdf}><IoEyeOutline /></CustomButtonLink></TableCell>
                                 <TableCell><CustomButtonIcon onPress={() => router(ROUTES.updateProduct + product.id)}><IoPencil /></CustomButtonIcon></TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </TableContent>
                  </TableScrollContainer>
                  <TableFooter>
                     <CustomPagination page={page} total={total} setPage={setPage} />
                  </TableFooter>
               </Table>
         }
      </Admin>
   )
}