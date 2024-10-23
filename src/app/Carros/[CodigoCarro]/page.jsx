"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import DetalleCarro from "@/Components/carro/DetalleCarro";

function Carro() {
  const { CodigoCarro } = useParams();


  return (
    <div>
      <DetalleCarro codigoCarro={CodigoCarro}/>
    </div>
  );
}

export default Carro;