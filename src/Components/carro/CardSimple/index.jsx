import React from "react";
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import './cardSimple.css'
import Link from "next/link";

export default function CardSimple({dataCarro}) {
    return (
        <Link className="contenedor-card-simple" href={`/Carros/${dataCarro.CodigoCarro}`}>
            <Card className="py-2">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{dataCarro.Marca} {dataCarro.Modelo}</p>
                    <small className="text-default-500">{dataCarro.Anio}</small>
                    <h4 className="font-bold text-large">Q {dataCarro.PrecioCliente} por dia</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 body">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
                        width={270}
                    />
                </CardBody>
                <CardFooter className="pb-0 pt-0 px-4 flex-col items-start">
                    <small className="text-default-500">{dataCarro.Descripcion}</small>
                </CardFooter>
            </Card>
        </Link>
    );
}
