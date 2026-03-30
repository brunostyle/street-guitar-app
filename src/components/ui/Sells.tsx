import { Avatar, AvatarFallback, AvatarImage, Card, CardContent, Description, Label, Table, TableBody, TableCell, TableColumn, TableContent, TableHeader, TableRow, TableScrollContainer } from "@heroui/react";
import { useNavigate } from "react-router";
import type { IOrderDashboard } from "@interfaces";
import { IoFolderOutline } from '@icons';
import { CustomButtonIcon } from "@components";
import { ROUTES } from "@navigation";
import { Flex } from "@styles";

interface ISells {
    sells?: IOrderDashboard[];
}

export const Sells = ({ sells = [] }: ISells) => {
    const router = useNavigate();
    return (
        <Card className="shadow-inset">
            <CardContent>
                <Table className="table" variant="secondary">
                    <TableScrollContainer>
                        <TableContent aria-label="Ultimas ventas">
                            <TableHeader>
                                <TableColumn>USUARIO</TableColumn>
                                <TableColumn>FECHA</TableColumn>
                                <TableColumn>ORDEN</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {sells.map(sell => (
                                    <TableRow key={sell.id}>
                                        <TableCell>
                                            <Flex>
                                                <Avatar size="sm" className="rounded-sm" color="accent">
                                                    <AvatarImage src={sell.user.avatar} />
                                                    <AvatarFallback>{sell.user.name.charAt(0).toUpperCase()}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col">
                                                    <Label>{sell.user.name}</Label>
                                                    <Description>{sell.user.email}</Description>
                                                </div>
                                            </Flex>
                                        </TableCell>
                                        <TableCell><h4>{new Date(sell.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })}</h4></TableCell>
                                        <TableCell><CustomButtonIcon onPress={() => router(ROUTES.checkout + sell.id)}><IoFolderOutline /></CustomButtonIcon></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </TableContent>
                    </TableScrollContainer>
                </Table>
            </CardContent>
        </Card>
    )
}