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
    const [result] = await conn.query(consulta);

    // Verificar si la respuesta es un array y está vacío
    if (Array.isArray(result) && result.length === 0) {
      return NextResponse.json(
        { message: "No se encontraron registros." },
        { status: 404 }
      );
    }

    // Verificar si la consulta resultó en un error o un resultado inesperado
    if (!result) {
      return NextResponse.json(
        { message: "Error en la consulta o resultados no válidos." },
        { status: 500 }
      );
    }

    // Retornar los resultados de la consulta
    return NextResponse.json(result);

  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
