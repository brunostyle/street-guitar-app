import { useParams } from 'react-router';
import { FullScreenLoading, Nothing, ProductList } from '@components';
import { useGetProductsQuery } from '@hooks';
import { Container } from '@styles';

const Search = () => {
   const { query } = useParams();
   const { products, isEmpty, isLoading } = useGetProductsQuery(query!);

   return (
      <Container>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text={"No se encontraron resultados para " + query} svg="/nothing.svg" />
               : <ProductList category={query!} products={products ?? []} />
         }
      </Container>
   )
}

export default Search;