import { Banner, ProductList } from '@components';
import { IoGridOutline } from '@icons';
import { useProducts } from '@hooks';
import { Container } from '@styles';

const Home = () => {
	const { products, isLoading } = useProducts();

	return (
		<>
			<Banner />
			<Container>
				<ProductList category="Todas las tablaturas" icon={<IoGridOutline />} products={products ?? []} isLoading={isLoading} />
			</Container>
		</>
	)
}

export default Home;