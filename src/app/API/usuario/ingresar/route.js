import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function POST(request) {
    try {
        const { Correo, Contrasena } = await request.json();
        const [user] = await conn.query(
            `SELECT * FROM USUARIO WHERE Correo = ? AND Contrasena = ?`,
            [Correo, Contrasena]
        );

        if (user.length === 0) {
            return NextResponse.json({ message: 'Usuario no encontrado o credenciales incorrectas' }, { status: 401 });
        }
        console.log('Usuario autenticado:', user);
        return NextResponse.json({
            CodigoUsuario: user.CodigoUsuario,
            Nombre: user.Nombre,
            Apellido: user.Apellido,
            Correo: user.Correo,
            CodigoTipoUsuario: user.CodigoTipoUsuario,
        });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}