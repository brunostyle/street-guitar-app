import { Avatar, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineTags, BiPencil, FaRegEye, MdOutlineImageNotSupported } from "@icons";
import { FullScreenLoading, Admin, Nothing, CustomButtonIcon, CustomButtonLink } from "@components";
import { HiddenTitle, HiddenSubtitle, ChipCategory } from "@styles";
import { usePaginateProducts } from "@hooks";

const Products = () => {
   const router = useNavigate();
   const { products = [], isEmpty, isLoading, page, setPage, total } = usePaginateProducts();
   return (
      <Admin funtional title="Productos" icon={<AiOutlineTags />}>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text="Aún no hay productos" svg="/nothing.svg" />
               :
               <Table removeWrapper className="table" selectionMode="single" aria-label="Products" bottomContent={
                  <Pagination className="mt-4 flex justify-center" variant="bordered" size="sm" showControls page={page} total={total} onChange={setPage} />}>
                  <TableHeader>
                     <TableColumn>IMAGEN</TableColumn>
                     <TableColumn>TITULO</TableColumn>
                     <TableColumn>DESCRIPCIÓN</TableColumn>
                     <TableColumn>PRECIO</TableColumn>
                     <TableColumn>CATEGORIA</TableColumn>
                     <TableColumn>TAB</TableColumn>
                     <TableColumn>EDITAR</TableColumn>
                  </TableHeader>
                  <TableBody>
                     {products.map((product: any) => (
                        <TableRow key={product.id}>
                           <TableCell><Avatar showFallback fallback={<MdOutlineImageNotSupported />} radius="sm" size="sm" src={product.images.at(0)} /></TableCell>
                           <TableCell><HiddenTitle>{product.title}</HiddenTitle></TableCell>
                           <TableCell><HiddenSubtitle>{product.description}</HiddenSubtitle></TableCell>
                           <TableCell><h4>${product.price}</h4></TableCell>
                           <TableCell><ChipCategory>{product.category}</ChipCategory></TableCell>
                           <TableCell><CustomButtonLink to={product.pdf} isDisabled={!product.pdf}><FaRegEye /></CustomButtonLink></TableCell>
                           <TableCell><CustomButtonIcon onPress={() => router(String(product.id))}><BiPencil /></CustomButtonIcon></TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
         }
      </Admin>
   )
}

export default Products;