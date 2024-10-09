import React from "react";
import { Card, CardFooter, Image, Button, CardBody, CardHeader } from "@nextui-org/react";
import "./cardNoDisponible.css";

export default function CardNoDisponible({dataCarro, esPropio}) {
    return (
        <div className="contenedor-card-no-disponible">
            <Card isFooterBlurred radius="lg" className="border-none py-2 bg-slate-400 text-white" >
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{dataCarro.Marca} {dataCarro.Modelo}</p>
                    <small className="text-default-500 text-white">{dataCarro.Anio}</small>
                    <h4 className="font-bold text-large">Q {dataCarro.PrecioCliente} por dia</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
                        width={270}
                    />
                </CardBody>
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">No disponible</p>
                    {esPropio? (
                        <Button
                        className="text-tiny text-white bg-black/20"
                        variant="flat"
                        color="default"
                        radius="lg"
                        size="sm"
                    >
                        Activar
                    </Button>
                    ):(
                        <Button
                        className="text-tiny text-white bg-black/20"
                        variant="flat"
                        color="default"
                        radius="lg"
                        size="sm"
                    >
                        Notificarme
                    </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
