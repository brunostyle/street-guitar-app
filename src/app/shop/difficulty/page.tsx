import { useParams } from "react-router-dom";
import { FullScreenLoading, Nothing, ProductList, Difficulty as Diff } from "@components";
import { useGetDifficulty } from "@hooks";
import { Container } from "@styles";

const Difficulty = () => {
   const { difficulty } = useParams();
   const { products, isEmpty, isLoading } = useGetDifficulty(Number(difficulty));

   return (
      <Container>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text={"No se encontraron resultados para " + difficulty} svg="/nothing.svg" />
               : <ProductList category="" icon={<Diff difficulty={Number(difficulty)} />} products={products ?? []} />
         }
      </Container>
   )
};

export default Difficulty;