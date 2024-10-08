import React from "react";
import CardNoDisponible from "../../Components/carro/CardNoDisponible";
import CardSimple from "../../Components/carro/CardSimple";
import { conn } from "@/libs/mysql";

async function cargarCarros() {
    try {
      const carros = await conn.query("SELECT * FROM CARRO WHERE Propietario = 1");
      await conn.end();
    console.log('prticion')
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
            {listaCarros.map((carro) => (
                carro.Disponible[0] == 1? 
                    <CardSimple key={carro.CodigoCarro} dataCarro={carro} />
                :
                    <CardNoDisponible key={carro.CodigoCarro} dataCarro={carro} esPropio={true} />
            ))}
        </div>
    );
}

export default CarrosPage;
