import { Avatar, AvatarFallback, AvatarImage, Table, TableBody, TableCell, TableColumn, TableContent, TableFooter, TableHeader, TableRow, TableScrollContainer } from "@heroui/react";
import { FullScreenLoading, Admin, Nothing, CustomPagination } from "@components";
import { HiddenTitle, HiddenSubtitle, ChipUser } from "@styles";
import { usePaginateUsers } from "@hooks";
import { IoPersonAddOutline } from "@icons";

export const Users = () => {
   const { users = [], isEmpty, isLoading, page, setPage, total } = usePaginateUsers();
   return (
      <Admin show={isEmpty ? "nothing" : "title-input"} title="Usuarios" icon={<IoPersonAddOutline />}>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text="Aún no hay usuarios" svg="/nothing.svg" />
               :
               <Table className="table" variant="secondary">
                  <TableScrollContainer>
                     <TableContent aria-label="Usuarios">
                        <TableHeader>
                           <TableColumn>AVATAR</TableColumn>
                           <TableColumn>NOMBRE</TableColumn>
                           <TableColumn>CORREO</TableColumn>
                           <TableColumn>ROLE</TableColumn>
                        </TableHeader>
                        <TableBody>
                           {users.map((user) => (
                              <TableRow key={user.id}>
                                 <TableCell>
                                    <Avatar size="sm" className="rounded-sm">
                                       <AvatarImage src={user.avatar} />
                                       <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                 </TableCell>
                                 <TableCell><HiddenTitle>{user.name}</HiddenTitle></TableCell>
                                 <TableCell><HiddenSubtitle>{user.email}</HiddenSubtitle></TableCell>
                                 <TableCell><ChipUser>{user.role}</ChipUser></TableCell>
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