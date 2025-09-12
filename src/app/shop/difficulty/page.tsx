import { useParams } from "react-router";
import { FullScreenLoading, Nothing, ProductList, Difficulty as Diff } from "@components";
import { useGetDifficulty } from "@hooks";
import { Container, Title } from "@styles";

const Difficulty = () => {
   const { difficulty } = useParams();
   const { products, isEmpty, isLoading } = useGetDifficulty(Number(difficulty));

   return (
      <Container>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text={"No se encontraron resultados para " + difficulty + " estrellas"} svg="/nothing.svg" />
               : <div>
                  <Title>Dificultad</Title>
                  <ProductList category="" icon={<Diff difficulty={Number(difficulty)} />} products={products ?? []} />
               </div>
         }
      </Container>
   )
};

export default Difficulty;