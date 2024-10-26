"use client";
import React, { useEffect, useState } from "react";
import CardNoDisponible from "@/Components/carro/CardNoDisponible";
import CardSimple from "@/Components/carro/CardSimple";
import Banner from "@/Components/carro/BannerCategorias";
import { useParams } from "next/navigation";
import axios from "axios";

 function CarrosPage() {
    const [listaCarros, setListaCarros] = useState([]);
    const [listaCarros2, setListaCarros2] = useState([]);
  const { nombre } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const url = "/API/sql/query"; // Reemplaza con tu ruta real
                const consulta = `SELECT c.*, MIN(i.url) AS url
                                FROM CARRO c
                                JOIN ImagenCarro i ON c.CodigoCarro = i.CodigoCarro
                                WHERE c.disponible = 1 
                                AND Nombre like '%${nombre}%' OR 
                                Marca like '%${nombre}%' Or 
                                Modelo  like '%${nombre}%' Or 
                                Descripcion like '%${nombre}%'
                                GROUP BY c.CodigoCarro
                                ORDER BY c.rentado ASC;`;
                const response = await axios.post(url, { consulta });
                setListaCarros(response.data);
                console.log('setListaCarros2',response.data);
                return response.data;
            } catch (error) {
                console.error("Error al hacer la solicitud:", error);
                return null;
            }
        }
        fetchData();
    }, [nombre]);


    return (
        <div className="flex items-center justify-center flex-wrap gap-4 p-4">
            <Banner />
            {listaCarros.map((carro) =>
                carro.Rentado != null && carro.Rentado?.data[0] == 1 ? (
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
