import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function POST(request) {
  try {
    // Obtener el cuerpo de la solicitud en formato JSON
    const { consulta } = await request.json();

    // Validar que la consulta sea de tipo SELECT
    if (!consulta.trim().toUpperCase().startsWith("SELECT")) {
      return NextResponse.json(
        { message: "Solo se permiten consultas de tipo SELECT." },
        { status: 400 }
      );
    }

    // Ejecutar la consulta de solo lectura
    const result = await conn.query(consulta);

    // Verificar si la respuesta es un array y devolver un array vacío si no hay resultados
    if (Array.isArray(result[0])) {
      return NextResponse.json(result[0].length > 0 ? result[0] : []);
    }

    // Retornar un array vacío si el resultado no es válido
    return NextResponse.json([]);

  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
