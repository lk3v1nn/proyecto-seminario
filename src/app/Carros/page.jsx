import React from "react";
import CardNoDisponible from "../../Components/carro/CardNoDisponible";
import CardSimple from "../../Components/carro/CardSimple";
import Banner from "@/Components/carro/Banner";
import { conn } from "@/libs/mysql";

async function cargarCarros() {
    try {
      const carros = await conn.query("SELECT * FROM CARRO WHERE disponible = 1 order by rentado asc");
  
      await conn.end();
  
      return carros;
    } catch (error) {
        console.error('Error al cargar los carros:', error);
        await conn.end();
        throw error;
    }
  }

async function CarrosPage() {
    const listaCarros = await cargarCarros();

    return (
        <div className="flex items-center justify-center flex-wrap gap-4 p-4">
            <Banner />
            {listaCarros.map((carro) => (
                carro.Rentado != null && carro.Rentado[0] == 1? 
                    <CardNoDisponible key={carro.CodigoCarro} dataCarro={carro} esPropio={false} />
                    :
                    <CardSimple key={carro.CodigoCarro} dataCarro={carro} />
            ))}
        </div>
    );
}

export default CarrosPage;
