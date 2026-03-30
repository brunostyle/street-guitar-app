import { Footer, Menu } from '@components';
import { Outlet } from 'react-router';

export const LayoutApp = () => (
	<>
		<Menu />
		<div className='min-h-dvh'>
			<Outlet />
		</div>
		<Footer />
	</>
);

