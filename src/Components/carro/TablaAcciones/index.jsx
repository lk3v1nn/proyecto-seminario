"use client";
import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Chip,
    Tooltip,
    getKeyValue,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { columns, users } from "./data";
import axios from "axios";
import Link from "next/link";

const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};

export default function App({ users }) {
    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        const accionReserva = (accion, codigoCarro) => {
            console.log("car", codigoCarro);
            async function fetchData() {
                try {
                    const url = "/API/sql/query";
                    let consulta = `UPDATE Reserva SET Aprobado = ${accion} WHERE CodigoCarro = ${codigoCarro}; `;
                    await axios.post(url, { consulta });
                    console.log("consulta", consulta);
                    let consulta2;
                    if (accion == 1) {
                        consulta2 = `UPDATE CARRO SET Rentado = 1 WHERE CodigoCarro = ${codigoCarro};`;
                    } else if (accion == 0) {
                        consulta2 = `UPDATE CARRO SET Rentado = 0 WHERE CodigoCarro = ${codigoCarro};`;
                    }
                    console.log("consulta2", consulta2);
                    const response = await axios.post(url, {
                        consulta: consulta2,
                    });
                    if (response.data) {
                        // Recargar la página después de la respuesta exitosa
                        window.location.reload();
                    }
                } catch (error) {
                    console.error("Error al hacer la solicitud:", error);
                    return null;
                }
            }
            fetchData();
        };

        switch (columnKey) {
            case "FechaSolicitud":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: user.url }}
                        description={user.Nombre + " " + user.Apellido}
                        name={cellValue}
                    >
                        {user.Apellido}
                    </User>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">
                            {cellValue}
                        </p>
                        <p className="text-bold text-sm capitalize text-default-400">
                            {user.team}
                        </p>
                    </div>
                );
            case "status":
                return (
                    <Chip
                        className="capitalize"
                        color={
                            statusColorMap[
                                user.Aprobado == 1
                                    ? "active"
                                    : user.Aprobado == 0
                                    ? "paused"
                                    : "danger"
                            ]
                        }
                        size="sm"
                        variant="flat"
                    >
                        {user.Aprobado == 1
                            ? "Rentado"
                            : user.Aprobado == 0
                            ? "Disponible"
                            : "Disponible"}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip color="success" content="Aprobar">
                            <span
                                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                                onClick={() => accionReserva(1, user.id)}
                            >
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Denegar">
                            <span
                                className="text-lg text-danger cursor-pointer active:opacity-50"
                                onClick={() => accionReserva(0, user.id)}
                            >
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                        <Tooltip content="Detalles">
                            <Link href={`/Carros/${user.id}`} >
                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                    <EyeIcon />
                                </span>
                            </Link>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <>
            <Table aria-label="Example table with custom cells">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={
                                column.uid === "actions" ? "center" : "start"
                            }
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={users}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => (
                                <TableCell>
                                    {renderCell(item, columnKey)}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
}
