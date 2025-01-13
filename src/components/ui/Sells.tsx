import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { IOrderDashboard } from "@interfaces";
import { AiOutlineFolderOpen } from '@icons';

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
                        <TableCell><Button isIconOnly variant="bordered" size="sm" onPress={() => router('/checkout/' + sell.id)}><AiOutlineFolderOpen /></Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}