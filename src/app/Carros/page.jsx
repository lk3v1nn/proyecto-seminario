"use client";
import React, { useEffect, useState } from "react";
import CardNoDisponible from "../../Components/carro/CardNoDisponible";
import CardSimple from "../../Components/carro/CardSimple";
import Banner from "@/Components/carro/BannerCategorias";
// import { conn } from "@/libs/mysql";

 function CarrosPage() {
    const [listaCarros, setListaCarros] = useState([]);

    useEffect(() => {
        const fetchCarros = async () => {
            try {
                const response = await fetch("/API/cars");
                if (!response.ok) {
                    throw new Error("Error al cargar los carros");
                }
                const data = await response.json();
                setListaCarros(data);
                console.log('carros', data);
            } catch (error) {
                console.error("Error al cargar los carros:", error);
            } finally {
            }
        };

        fetchCarros();
    }, []);


    return (
        <div className="flex items-center justify-center flex-wrap gap-4 p-4">
            <Banner />
            {listaCarros.map((carro) =>
                carro.Rentado != null && carro.Rentado[0] == 1 ? (
                    <CardNoDisponible
                        key={carro.CodigoCarro}
                        dataCarro={carro}
                        esPropio={false}
                    />
                ) : (
                    <CardSimple key={carro.CodigoCarro} dataCarro={carro} />
                )
            )}
        </div>
    );
}

export default CarrosPage;
