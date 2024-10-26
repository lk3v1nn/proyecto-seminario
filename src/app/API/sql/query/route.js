import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function POST(request) {
    const { consulta } = await request.json();
    try {
        const queryResponse = await conn.query(consulta);

        await conn.end(); // Cierra la conexión después de la consulta
        return NextResponse.json(queryResponse);
    } catch (error) {
        console.error("Error al cargar los carros:", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}