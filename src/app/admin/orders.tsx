import { Avatar, AvatarFallback, AvatarImage, Checkbox, CheckboxControl, CheckboxIndicator, Description, Label, Table, TableBody, TableCell, TableColumn, TableContent, TableFooter, TableHeader, TableRow, TableScrollContainer } from "@heroui/react";
import { useNavigate } from "react-router";
import { IoFolderOutline, IoTriangleOutline } from '@icons';
import { FullScreenLoading, Admin, Nothing, CustomButtonIcon, CustomPagination } from "@components";
import { usePaginateOrders } from "@hooks";
import { ROUTES } from "@navigation";
import { Flex } from "@styles";

export const Orders = () => {
   const { orders = [], isEmpty, isLoading, page, setPage, total } = usePaginateOrders();
   const router = useNavigate();
   return (
      <Admin show={isEmpty ? "nothing" : "title-input"} title="Ordenes" icon={<IoTriangleOutline />}>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text="Aún no hay ordenes" svg="/nothing.svg" />
               :
               <Table className="table" variant="secondary">
                  <TableScrollContainer>
                     <TableContent aria-label="Historial de ordenes">
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
                                 <TableCell>
                                    <Flex>
                                       <Avatar size="sm" className="rounded-sm" color="accent">
                                          <AvatarImage src={order.user.avatar} />
                                          <AvatarFallback>{order.user.name.charAt(0).toUpperCase()}</AvatarFallback>
                                       </Avatar>
                                       <div className="flex flex-col">
                                          <Label>{order.user.name}</Label>
                                          <Description>{order.user.email}</Description>
                                       </div>
                                    </Flex>
                                 </TableCell>
                                 <TableCell><h4>{order.items}</h4></TableCell>
                                 <TableCell><h4>${order.total}</h4></TableCell>
                                 <TableCell><h4>{new Date(order.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })}</h4></TableCell>
                                 <TableCell>
                                    <Checkbox isSelected={order.paid} isReadOnly>
                                       <CheckboxControl>
                                          <CheckboxIndicator />
                                       </CheckboxControl>
                                    </Checkbox>
                                 </TableCell>
                                 <TableCell><CustomButtonIcon onPress={() => router(ROUTES.checkout + order.id)}><IoFolderOutline /></CustomButtonIcon></TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </TableContent>
                  </TableScrollContainer>
                  <TableFooter>
                     <CustomPagination page={page} total={total} setPage={setPage} />
                  </TableFooter>
               </Table>
         }
      </Admin>
   )
}