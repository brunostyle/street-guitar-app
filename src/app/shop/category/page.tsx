import { useParams } from "react-router";
import { FullScreenLoading, Nothing, ProductList } from "@components";
import { IoMusicalNoteSharp } from "@icons";
import { useGetCategory } from "@hooks";
import { Container } from "@styles";

const Category = () => {
   const { category } = useParams();
   const { products, isEmpty, isLoading } = useGetCategory(String(category));

   return (
      <Container>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text={"No se encontraron resultados para " + category} svg="/nothing.svg" />
               : <ProductList category={category?.toUpperCase()!} icon={<IoMusicalNoteSharp />} products={products ?? []} />
         }
      </Container>
   )
};

export default Category;