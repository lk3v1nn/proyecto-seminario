import "./style.css";
import React, { useEffect, useState } from "react";
import OpcionesBoton from "../OpcionesBoton";
import Comentario from "../Comentario";
import VistaPreviaImagenes from "../VistaPreviaImagenes";
import BannerRecomendaciones from "../BanerRecomendaciones";
import CardUsuario from "../CardUsuario";
import DatosCarro from "../DatosCarro";
import { Button } from "@nextui-org/react";

export default function DetalleCarro({ codigoCarro }) {
    const [imagenes, setImagenes] = useState([]);
    const [carro, setCarro] = useState(null);

    // Solicitud del carro
    useEffect(() => {
        async function fetchCarro() {
            const response = await fetch(`/API/cars/${codigoCarro}`);
            const data = await response.json();
            console.log("res ", data);
            setCarro(data[0]);
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

    return (
        <>
            <div className="contendor-DetalleCarro">
                <div className="contenido">
                    <div className="flex gap-8">
                        <DatosCarro carro={carro} />
                        <div className="flex flex-col justify-evenly">
                            <Button color="primary" size="md" variant="flat">Contactar</Button>
                            <Button color="primary" size="sm" variant="bordered">Guardar</Button>
                        </div>
                    </div>
                    {/* <OpcionesBoton /> */}
                    <VistaPreviaImagenes imagenes={imagenes} data={carro} />
                </div>
                <BannerRecomendaciones />
            </div>
            <CardUsuario />
            <VistaPreviaImagenes />
            <BannerRecomendaciones />
            <CardUsuario />

            <div className="flex gap-2 px-8 mt-4 justify-center flex-wrap">
                <Comentario />
                <Comentario />
                <Comentario />
            </div>
        </>
    );
}
