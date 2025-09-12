import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@heroui/react";
import { useNavigate } from "react-router";
import type { IOrderDashboard } from "@interfaces";
import { IoFolderOutline } from '@icons';
import { CustomButtonIcon } from "@components";
import { ROUTES } from "@navigation";

interface ISells {
    sells?: IOrderDashboard[];
}

export const Sells = ({ sells = [] }: ISells) => {
    const router = useNavigate();
    return (
        <Table aria-label="Ultimas ventas" hideHeader>
            <TableHeader>
                <TableColumn>USUARIO</TableColumn>
                <TableColumn>FECHA</TableColumn>
                <TableColumn>ORDEN</TableColumn>
            </TableHeader>
            <TableBody emptyContent="Aun no hay ventas">
                {sells.map(sell => (
                    <TableRow key={sell.id}>
                        <TableCell><User name={sell.user.name} description={sell.user.email} avatarProps={{ radius: 'sm', size: 'sm', src: sell.user.avatar, color: 'secondary', name: sell.user.name.charAt(0).toUpperCase() }} /></TableCell>
                        <TableCell><h4>{new Date(sell.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })}</h4></TableCell>
                        <TableCell><CustomButtonIcon onPress={() => router(ROUTES.checkout + sell.id)}><IoFolderOutline /></CustomButtonIcon></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}