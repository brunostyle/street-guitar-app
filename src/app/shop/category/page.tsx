import { useParams } from "react-router";
import { FullScreenLoading, Nothing, ProductList } from "@components";
import { IoMusicalNoteSharp } from "@icons";
import { useGetCategory } from "@hooks";
import { Container } from "@styles";
import { categoriesObject } from "@interfaces";

const Category = () => {
   const { category } = useParams();
   const { products, isEmpty, isLoading } = useGetCategory(String(category));
   const categoryName = categoriesObject[category as keyof typeof categoriesObject];

   return (
      <Container>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text={"No se encontraron resultados para " + category} svg="/nothing.svg" />
               : <ProductList category={categoryName} icon={<IoMusicalNoteSharp />} products={products ?? []} />
         }
      </Container>
   )
};

export default Category;