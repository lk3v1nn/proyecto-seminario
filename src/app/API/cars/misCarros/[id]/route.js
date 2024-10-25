const { NextResponse } = require("next/server");
import { conn } from "@/libs/mysql";

export async function GET(request, { params }) {
    try {
        const queryResponse = await conn.query(
            `SELECT c.*, MIN(i.url) AS url 
            FROM CARRO c 
            JOIN ImagenCarro i ON c.CodigoCarro = i.CodigoCarro
            WHERE Propietario = ?
            GROUP BY c.CodigoCarro
            ORDER BY c.rentado ASC`,
            [params.id]
        );
        if (queryResponse.length === 0) {
            return NextResponse.json(
                { message: "No se encontraron resultados" },
                { status: 404 }
            );
        }
        return NextResponse.json(queryResponse);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
