import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function POST(request) {
    try {
        const { Nombre, Apellido, Correo, Contrasena, CodigoTipoUsuario } =
            await request.json();
        const queryResponse = await conn.query(`INSERT INTO USUARIO set ?`, {
            Nombre,
            Apellido,
            Correo,
            Contrasena,
            CodigoTipoUsuario
        });
        return NextResponse.json({
            CodigoUsuario: queryResponse.insertId,
            Nombre,
            Apellido,
            Correo,
        });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}



