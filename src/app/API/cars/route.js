const { NextResponse } = require("next/server")
import { conn } from "@/libs/mysql"

export async function GET(){
    const sqlQuery = await conn.query("SELECT * FROM CARRO") 
    return NextResponse.json(sqlQuery)
}

export async function POST(request){
    const {Nombre, Marca, Modelo, Anio, PrecioCliente, PrecioEstimado, Propietario} = await request.json();
    const sqlQuery = await conn.query(`INSERT INTO CARRO (Nombre, Marca, Modelo, Anio, PrecioCliente, PrecioEstimado, Propietario) 
                                        VALUES('${Nombre}', '${Marca}', '${Modelo}', ${Anio}, ${PrecioCliente}, ${PrecioEstimado}, ${Propietario}) `)
    return NextResponse.json(sqlQuery)
}

