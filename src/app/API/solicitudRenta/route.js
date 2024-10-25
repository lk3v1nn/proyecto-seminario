import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function POST(request) {
    try {
        const data = await request.json();

        const query = `INSERT INTO Reserva SET ?`;
        const valores = {
            CodigoUsuarioSolicita: data.CodigoUsuarioSolicita,
            CodigoCarro: data.CodigoCarro,
            FechaSolicitud: data.FechaSolicitud || null,
            FechaRespuesta: data.FechaRespuesta || null,
            Aprobado: data.Aprobado || null,
        };

        // Ejecutar la consulta con el objeto de conexión
        const result = await conn.query(query, valores);

        return NextResponse.json({
            CodigoReserva: result,
        });
    } catch (error) {
        console.error("Error al insertar en la tabla Reserva:", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
