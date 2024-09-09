import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export function PUT() {
    return NextResponse.json({ message: "Actualizando carro" });
}

export async function DELETE(request, {params}) {
    try {
        const queryResponse = await conn.query(
            "DELETE FROM CARRO WHERE CodigoCarro = ?",
            [params.id]
        );
        if (queryResponse.affectedRows === 0) {
            return NextResponse.json({message: 'No se encontraron resultado'}, {status: 404});
        }
        return NextResponse.json({message: 'Carro eliminado'});
    } catch (error) {
        return NextResponse.json({ message: [params.id] }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    try {
        const queryResponse = await conn.query(
            "SELECT * FROM CARRO WHERE CodigoCarro = ?",
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
