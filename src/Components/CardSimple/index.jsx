import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import './cardSimple.css'

export default function CardSimple({precio, anio, carro}) {
    return (
        <div className="contenedor-card-simple">
            <Card className="py-2">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{carro} </p>
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
            </Card>
        </div>
    );
}
