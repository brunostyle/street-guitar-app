import { Outlet } from 'react-router-dom';
import { MenuAdmin } from '@components';
import { Container, Gap } from '@styles';

export const LayoutAdmin = () => (
   <>
      <MenuAdmin />
      <Container className="overflow-x-hidden py-6">
         <Gap>
            <Outlet />
         </Gap>
      </Container>
   </>
)