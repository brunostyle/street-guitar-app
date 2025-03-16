import { Spinner } from '@heroui/react';
import { Banner, ProductList } from '@components';
import { BiGridAlt } from '@icons';
import { useProducts } from '@hooks';

const Home = () => {
	const { products, isLoading } = useProducts();
	return (
		<section>
			<Banner />
			{isLoading
				? <Spinner variant="spinner" className="flex justify-center mb-80" /> 
				: <ProductList category="Todos los productos" icon={<BiGridAlt />} products={products ?? []} />
			}
		</section>
	)
}

export default Home;