"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import DetalleCarro from "@/Components/carro/DetalleCarro";

function Carro() {
  const { CodigoCarro } = useParams();
  const [carro, setCarro] = useState(null);

  useEffect(() => {
    async function fetchCarro() {
      const response = await fetch(`/API/cars/${CodigoCarro}`);
      const data = await response.json();
      console.log('res ', data);
      setCarro(data[0]);
    }

    fetchCarro();
  }, [CodigoCarro]);

  if (!carro) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{carro.Modelo}</h1>
      <p>Marca: {carro.Marca}</p>
      <p>Anio: {carro.Anio}</p>
      <DetalleCarro/>
    </div>
  );
}

export default Carro;