const { NextResponse } = require("next/server");
import { conn } from "@/libs/mysql";

export async function GET() {
    try {
        const QueryRespnse = await conn.query("SELECT * FROM CARRO");
        return NextResponse.json(QueryRespnse);    
    } catch (error) {
        return NextResponse.json({message: error.message}, { status: 500 });
    }
    
}

export async function POST(request) {
    try {
        const {
            Nombre,
            Marca,
            Modelo,
            Anio,
            Descripcion,
            PrecioCliente,
            PrecioEstimado,
            Propietario,
            Disponible,
        } = await request.json();
        const queryResponse = await conn.query(`INSERT INTO CARRO set? `, {
            Nombre,
            Marca,
            Modelo,
            Anio,
            Descripcion,
            PrecioCliente,
            PrecioEstimado,
            Propietario,
            Disponible,
        });
        return NextResponse.json({
            CodigoCarro: queryResponse.insertId,
            Nombre,
            Marca,
            Modelo,
            Anio,
            Descripcion,
            PrecioCliente,
            PrecioEstimado,
            Propietario,
            Disponible,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({message : error.message}, { status: 500 })
    }
}
