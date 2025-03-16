import { Banner, ProductList } from '@components';
import { BiGridAlt } from '@icons';
import { useProducts } from '@hooks';

const Home = () => {
	const { products, isLoading } = useProducts();

	return (
		<section>
			<Banner />
			<ProductList category="Todos los productos" icon={<BiGridAlt />} products={products ?? []} isLoading={isLoading} />
		</section>
	)
}

export default Home;