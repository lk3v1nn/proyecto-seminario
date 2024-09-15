import React from "react";
import CardNoDisponible from "../Components/CardNoDisponible";
import CardSimple from "../Components/CardSimple";

function HomePage() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-4 p-4">
    
            <CardNoDisponible carro={"Ferrari S12"} anio={2022} precio={1000}/>
            <CardNoDisponible carro={"Ferrari pura sangre"} anio={2015} precio={750}/>
            <CardSimple carro={"Volkswaguen Jetta"} anio={2010} precio={200}/>
            <CardSimple carro={"Toyota Tacoma"} anio={2013} precio={150}/>
            <CardSimple carro={"Honda type R"} anio={2020} precio={350}/>
        </div>
    );
}

export default HomePage;
