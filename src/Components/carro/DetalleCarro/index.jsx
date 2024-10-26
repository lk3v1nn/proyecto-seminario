import "./style.css";
import React, { useEffect, useState } from "react";
import OpcionesBoton from "../OpcionesBoton";
import Comentario from "../Comentario";
import VistaPreviaImagenes from "../VistaPreviaImagenes";
import BannerRecomendaciones from "../BanerRecomendaciones";
import CardUsuario from "../CardUsuario";
import DatosCarro from "../DatosCarro";
import { Button } from "@nextui-org/react";
import { useUsuarioStore } from "@/store/usuario";
import realizarSelect from "@/utils/sql/select";
import reservarCarro from "@/utils/reservarCarro";

export default function DetalleCarro({ codigoCarro }) {
    const [imagenes, setImagenes] = useState([]);
    const [carro, setCarro] = useState(null);
    const { sesion } = useUsuarioStore();
    const [carroReservado, setCarroReservado] = useState([]);
    const [carroPropio, setCarroPropio] = useState([]);

    // Valida si el caro ya se encuentra reservado o es propio
    useEffect(() => {
        const consultar = async () => {
            const estaReservado = `SELECT CodigoReserva FROM Reserva WHERE CodigoCarro = ${codigoCarro} AND CodigoUsuarioSolicita = ${sesion.CodigoUsuario};`;
            const respuesta1 = await realizarSelect(estaReservado);
            setCarroReservado(respuesta1);

            const esPropio = `SELECT * FROM CARRO WHERE CodigoCarro = ${codigoCarro} AND Propietario = ${sesion.CodigoUsuario};`;
            const respuesta2 = await realizarSelect(esPropio);
            setCarroPropio(respuesta2);
        };
        sesion?.CodigoUsuario && consultar();
    }, [sesion]);

    // Solicitud datos del carro
    useEffect(() => {
        async function fetchCarro() {
            const response = await fetch(`/API/cars/${codigoCarro}`);
            const data = await response.json();
            setCarro(data[0]);
            console.log("Carro:", data[0]);
        }

        fetchCarro();
    }, [codigoCarro]);

    // Solicitud de imagenes
    useEffect(() => {
        const solicitarImagenes = async () => {
            const response = await fetch(`/API/imagenes/${codigoCarro}`);
            const data = await response.json();
            setImagenes(data);
        };
        solicitarImagenes();
    }, [codigoCarro]);

    const crearReservacion = async () => {
        await reservarCarro(
            sesion.CodigoUsuario,
            codigoCarro,
            new Date().toISOString(),
            null,
            null
        );
        setCarroReservado(["reservado"]);
    };

    // const reservarCarro = async () => {
    //     const nuevaReserva = {
    //         CodigoUsuarioSolicita: sesion.CodigoUsuario,
    //         CodigoCarro: codigoCarro,
    //         FechaSolicitud: convertirFechaMySQL(new Date().toISOString()), // Convertir al formato MySQL
    //         FechaRespuesta: null,
    //         Aprobado: null,
    //     };
    //     await crearReserva(nuevaReserva);

    //     async function crearReserva(data) {
    //         try {
    //             const response = await fetch("/API/solicitudRenta", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify(data),
    //             });

    //             if (!response.ok) {
    //                 const errorData = await response.json();
    //                 throw new Error(`Error: ${errorData.message}`);
    //             }

    //             const result = await response.json();
    //             console.log("Reserva creada con éxito:", result);
    //             return result;
    //         } catch (error) {
    //             console.error("Error al crear la reserva:", error.message);
    //         }
    //     }

    //     function convertirFechaMySQL(fechaISO) {
    //         const fecha = new Date(fechaISO);
    //         const anio = fecha.getFullYear();
    //         const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Mes comienza desde 0
    //         const dia = String(fecha.getDate()).padStart(2, "0");
    //         const horas = String(fecha.getHours()).padStart(2, "0");
    //         const minutos = String(fecha.getMinutes()).padStart(2, "0");
    //         const segundos = String(fecha.getSeconds()).padStart(2, "0");

    //         return `${anio}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
    //     }
    // };

    return (
        <>
            <div className="contendor-DetalleCarro">
                <div className="contenido">
                    <div className="flex gap-8">
                        <DatosCarro carro={carro} />
                        {carroPropio.length == 0 && (
                            <div className="flex flex-col justify-evenly">
                                {carroReservado.length == 0 ? (
                                    <Button
                                        color="primary"
                                        size="md"
                                        variant="flat"
                                        onClick={() => crearReservacion()}
                                    >
                                        Reservar
                                    </Button>
                                ) : (
                                    <Button
                                        color="secondary"
                                        size="md"
                                        variant="flat"
                                    >
                                        Carro reservado
                                    </Button>
                                )}

                                <Button
                                    color="primary"
                                    size="sm"
                                    variant="bordered"
                                >
                                    Guardar
                                </Button>
                            </div>
                        )}
                    </div>
                    {/* <OpcionesBoton /> */}
                    <VistaPreviaImagenes imagenes={imagenes} data={carro} />
                    <div className="flex gap-2 px-8 mt-4 justify-center flex-wrap">
                        <Comentario />
                        <Comentario />
                        <Comentario />
                    </div>
                </div>
                <BannerRecomendaciones />
            </div>
            <CardUsuario />
            <VistaPreviaImagenes />
            <BannerRecomendaciones />
            <CardUsuario />
        </>
    );
}
