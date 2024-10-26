const { NextResponse } = require("next/server");
import { conn } from "@/libs/mysql";

// export async function GET() {
//     try {
//         const QueryRespnse = await conn.query("SELECT * FROM CARRO");
//         return NextResponse.json(QueryRespnse);    
//     } catch (error) {
//         return NextResponse.json({message: error.message}, { status: 500 });
//     }
    
// }


export async function GET() {
    try {
        const queryResponse = await conn.query(`
            SELECT c.*, MIN(i.url) AS url
            FROM CARRO c
            JOIN ImagenCarro i ON c.CodigoCarro = i.CodigoCarro
            WHERE c.disponible = 1 
            GROUP BY c.CodigoCarro
            ORDER BY c.rentado ASC;
        `);

        await conn.end(); // Cierra la conexión después de la consulta
        return NextResponse.json(queryResponse);
    } catch (error) {
        console.error("Error al cargar los carros:", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const data = await request.formData();
        
        const queryResponse = await conn.query(`INSERT INTO CARRO set?     `, {
            Nombre: data.get("Nombre"),
            Marca: data.get("Marca"),
            Modelo: data.get("Modelo"),
            Anio: data.get("Anio"),
            Descripcion: data.get("Descripcion"),
            PrecioCliente: data.get("PrecioCliente"),
            PrecioEstimado: data.get("PrecioEstimado"),
            Propietario: data.get("Propietario"),
            Disponible: parseInt(data.get("Disponible")) ,
        });

        return NextResponse.json({
            CodigoCarro: queryResponse.insertId,
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({message : error.message}, { status: 500 })
    }
}
