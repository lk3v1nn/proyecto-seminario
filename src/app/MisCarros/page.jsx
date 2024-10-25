"use client";
import React, { useState, useEffect } from "react";
import CardNoDisponible from "../../Components/carro/CardNoDisponible";
import CardSimple from "../../Components/carro/CardSimple";
import { useUsuarioStore } from "@/store/usuario";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import ChipsMiCuenta from "@/Components/carro/ChipsMiCuenta";

function CarrosPage() {
    const { sesion } = useUsuarioStore();
    // const listaCarros = await cargarCarros();

    const [listaCarros, setListaCarros] = useState([]);

    // Solicitud del carro
    useEffect(() => {
        async function fetchCarro() {
            const response = await fetch(
                `/API/cars/misCarros/${sesion.CodigoUsuario}`
            );
            console.log("response ", response);
            if (!response.ok) {
                console.log("Error al cargar los carros");
                setListaCarros([]);
            } else {
                const data = await response.json();
                console.log("res ", data);
                setListaCarros(data);
            }
        }

        fetchCarro();
    }, [sesion]);

    return (
        <div className="flex items-center justify-center flex-col gap-4 p-4">
            <ChipsMiCuenta />
            <div className="flex items-center justify-center flex-wrap gap-4 p-4">
                {listaCarros.length > 0 ? (
                    listaCarros.map((carro) =>
                        carro?.Disponible?.data[0] == 1 ? (
                            <CardSimple
                                key={carro.CodigoCarro}
                                dataCarro={carro}
                            />
                        ) : (
                            <CardNoDisponible
                                key={carro.CodigoCarro}
                                dataCarro={carro}
                                esPropio={true}
                            />
                        )
                    )
                ) : (
                    <>
                        <h1>No hay carros disponibles</h1>
                        <br />
                        <Button color="primary">
                            <Link href="/CrearCarro">Publicar</Link>
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}

export default CarrosPage;
