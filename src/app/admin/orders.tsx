import { Checkbox, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@heroui/react";
import { useNavigate } from "react-router";
import { IoFolderOutline, IoTriangleOutline } from '@icons';
import { FullScreenLoading, Admin, Nothing, CustomButtonIcon } from "@components";
import { usePaginateOrders } from "@hooks";
import { ROUTES } from "@navigation";

const Orders = () => {
   const { orders = [], isEmpty, isLoading, page, setPage, total } = usePaginateOrders();
   const router = useNavigate();
   return (
      <Admin show={isEmpty ? "nothing" : "title-input"} title="Ordenes" icon={<IoTriangleOutline />}>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text="Aún no hay ordenes" svg="/nothing.svg" />
               :
               <Table removeWrapper className="table" aria-label="Historial de ordenes" bottomContent={
                  <Pagination className="mt-4 flex justify-center" variant="bordered" size="sm" showShadow showControls page={page} total={total} onChange={setPage} />}>
                  <TableHeader>
                     <TableColumn>CLIENTE</TableColumn>
                     <TableColumn>ITEMS</TableColumn>
                     <TableColumn>TOTAL</TableColumn>
                     <TableColumn>CREADA</TableColumn>
                     <TableColumn>PAGADA</TableColumn>
                     <TableColumn>ORDEN</TableColumn>
                  </TableHeader>
                  <TableBody>
                     {orders.map((order) => (
                        <TableRow key={order.id}>
                           <TableCell><User name={order.user.name} description={order.user.email} avatarProps={{ radius: 'sm', size: 'sm', src: order.user.avatar, color: 'secondary', name: order.user.name.charAt(0).toUpperCase() }} /></TableCell>
                           <TableCell><h4>{order.items}</h4></TableCell>
                           <TableCell><h4>${order.total}</h4></TableCell>
                           <TableCell><h4>{new Date(order.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })}</h4></TableCell>
                           <TableCell><Checkbox aria-label="Pagada" isSelected={order.paid} isReadOnly /></TableCell>
                           <TableCell><CustomButtonIcon onPress={() => router(ROUTES.checkout + order.id)}><IoFolderOutline /></CustomButtonIcon></TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
         }
      </Admin>
   )
}

export default Orders;