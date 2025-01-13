import { useParams } from 'react-router-dom';
import { FullScreenLoading, Nothing, ProductList } from '@components';
import { useGetProductsQuery } from '@hooks';

const Search = () => {
   const { query } = useParams();
   const { products, isEmpty, isLoading } = useGetProductsQuery(query!);

   return (
      <section>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text={"No se encontraron resultados para " + query} svg="/nothing.svg" />
               : <ProductList category={query!} products={products ?? []} />
         }
      </section>
   )
}

export default Search;