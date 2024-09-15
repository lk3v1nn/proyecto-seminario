import React from "react";
import { Card, CardFooter, Image, Button, CardBody, CardHeader } from "@nextui-org/react";
import "./cardNoDisponible.css";

export default function CardNoDisponible({precio, anio, carro}) {
    return (
        <div className="contenedor-card-no-disponible">
            <Card isFooterBlurred radius="lg" className="border-none py-2">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{carro}</p>
                    <small className="text-default-500">{anio}</small>
                    <h4 className="font-bold text-large">Q {precio} por dia</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        width={270}
                    />
                </CardBody>
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">No disponible</p>
                    <Button
                        className="text-tiny text-white bg-black/20"
                        variant="flat"
                        color="default"
                        radius="lg"
                        size="sm"
                    >
                        Notificarme
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
