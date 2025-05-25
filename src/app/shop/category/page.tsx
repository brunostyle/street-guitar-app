import { useParams } from "react-router-dom";
import { FullScreenLoading, Nothing, ProductList } from "@components";
import { IoMusicalNotesSharp } from "@icons";
import { useGetCategory } from "@hooks";
import { Container } from "@styles";

const categories = {
   rock: "Rock",
   folclore: "Folclore",
   pop: "Pop",
}

const Category = () => {
   const { category } = useParams();
   const { products, isEmpty, isLoading } = useGetCategory(String(category));
   const categoryName = categories[category as keyof typeof categories];

   return (
      <Container>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text={"No se encontraron resultados para " + category} svg="/nothing.svg" />
               : <ProductList category={categoryName} icon={<IoMusicalNotesSharp />} products={products ?? []} />
         }
      </Container>
   )
};

export default Category;