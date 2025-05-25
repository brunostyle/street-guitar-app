import { Outlet } from 'react-router-dom';
import { MenuAdmin } from '@components';
import { Container } from '@styles';

export const LayoutAdmin = () => (
   <>
      <MenuAdmin />
      <Container className="flex flex-col gap-4 overflow-x-hidden py-6">
         <Outlet />
      </Container>
   </>
)