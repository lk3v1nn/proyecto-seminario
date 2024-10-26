"use client";
import React, { useEffect } from "react";
import TablaAcciones from "@/Components/carro/TablaReservaciones";
import { useUsuarioStore } from "@/store/usuario";
import axios from "axios";

export default function Reservaciones() {
    const { sesion } = useUsuarioStore();
    const [listaReserva, setListaReserva] = React.useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const url = "/API/sql/query"; // Reemplaza con tu ruta real
                const consulta = `SELECT 
                                    max(r.CodigoCarro) as id, 
                                    max(r.FechaSolicitud) as FechaSolicitud, 
                                    max(r.Aprobado) as Aprobado, 
                                    max(c.Marca) as Marca, 
                                    max(c.Modelo) as Modelo, 
                                    max(c.Anio) as Anio, 
                                    max(c.PrecioCliente) as Precio, 
                                    max(c.Propietario), 
                                    max(u.Nombre) as Nombre, 
                                    max(u.Apellido) as Apellido, 
                                    max(i.url) as url
                                FROM Reserva r
                                JOIN CARRO c ON r.CodigoCarro = c.CodigoCarro 
                                JOIN USUARIO u ON c.Propietario = u.CodigoUsuario
                                JOIN ImagenCarro i ON c.CodigoCarro = i.CodigoCarro
                                where r.CodigoUsuarioSolicita = ${sesion.CodigoUsuario}
                                group by r.CodigoCarro`;
                const response = await axios.post(url, { consulta });
                setListaReserva(response.data);
                console.log('listaReserva',response.data);
                return response.data;
            } catch (error) {
                console.error("Error al hacer la solicitud:", error);
                return null;
            }
        }
        sesion && fetchData();
    }, [sesion]);

    return (
        <div>
            <TablaAcciones users={listaReserva}/>
        </div>
    );
}
