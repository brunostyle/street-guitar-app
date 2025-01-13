import { Footer, Menu } from '@components';
import { Outlet } from 'react-router-dom';

export const LayoutApp = () => (
	<>
		<Menu />
		<div className="container mx-auto p-4 min-h-screen">
			<Outlet />
		</div>
		<Footer />
	</>
);

