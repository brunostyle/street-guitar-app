import { Avatar, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { FullScreenLoading, Admin, Nothing } from "@components";
import { HiddenTitle, HiddenSubtitle, ChipUser } from "@styles";
import { usePaginateUsers } from "@hooks";
import { IoPersonAddOutline } from "@icons";

const Users = () => {
   const { users = [], isEmpty, isLoading, page, setPage, total } = usePaginateUsers();
   return (
      <Admin show={isEmpty ? "nothing": "title-input"} title="Usuarios" icon={<IoPersonAddOutline />}>
         {isLoading
            ? <FullScreenLoading />
            : isEmpty
               ? <Nothing text="Aún no hay usuarios" svg="/nothing.svg" />
               :
               <Table removeWrapper className="table" aria-label="Usuarios" selectionMode="multiple" bottomContent={
                  <Pagination className="mt-4 flex justify-center" variant="bordered" size="sm" showShadow showControls page={page} total={total} onChange={setPage} />}>
                  <TableHeader>
                     <TableColumn>AVATAR</TableColumn>
                     <TableColumn>NOMBRE</TableColumn>
                     <TableColumn>CORREO</TableColumn>
                     <TableColumn>ROLE</TableColumn>
                  </TableHeader>
                  <TableBody>
                     {users.map((user) => (
                        <TableRow key={user.id}>
                           <TableCell><Avatar color="primary" radius="md" size="sm" showFallback name={user.name.charAt(0).toUpperCase()} src={user.avatar} /></TableCell>
                           <TableCell><HiddenTitle>{user.name}</HiddenTitle></TableCell>
                           <TableCell><HiddenSubtitle>{user.email}</HiddenSubtitle></TableCell>
                           <TableCell><ChipUser>{user.role}</ChipUser></TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
         }
      </Admin>
   )
}

export default Users;