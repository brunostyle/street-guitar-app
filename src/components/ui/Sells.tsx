import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { IOrderDashboard } from "@interfaces";
import { AiOutlineFolderOpen } from '@icons';
import { CustomIconButton } from "@components";

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
                        <TableCell><User name={sell.user.name} description={sell.user.email} avatarProps={{ radius: 'sm', size:'sm', src: sell.user.avatar, color: 'secondary', name: sell.user.name.charAt(0).toUpperCase() }} /></TableCell>
                        <TableCell><h4>{new Date(sell.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })}</h4></TableCell>
                        <TableCell><CustomIconButton onPress={() => router('/checkout/' + sell.id)}><AiOutlineFolderOpen /></CustomIconButton></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}