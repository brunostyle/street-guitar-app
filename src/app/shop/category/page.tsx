import { useParams } from "react-router-dom";
import { FullScreenLoading, Nothing, ProductList } from "@components";
import { IoMusicalNotesSharp } from "@icons";
import { useGetCategory } from "@hooks";

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
      <section>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text={"No se encontraron resultados para " + category} svg="/nothing.svg" />
               : <ProductList category={categoryName} icon={<IoMusicalNotesSharp />} products={products ?? []} />
         }
      </section>
   )
};

export default Category;