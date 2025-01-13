import { Outlet } from 'react-router-dom';
import { MenuAdmin } from '@components';

export const LayoutAdmin = () => (
   <>
      <MenuAdmin />
      <div className="container mx-auto py-6 px-4 flex flex-col gap-4 min-h-screen overflow-x-hidden">
        <Outlet />
      </div>
   </>
)