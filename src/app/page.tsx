import { Banner, ProductList } from '@components';
import { IoGridOutline } from '@icons';
import { useProducts } from '@hooks';

const Home = () => {
	const { products, isLoading } = useProducts();

	return (
		<section>
			<Banner />
			<ProductList category="Todas las tablaturas" icon={<IoGridOutline />} products={products ?? []} isLoading={isLoading} />
		</section>
	)
}

export default Home;