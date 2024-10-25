const { NextResponse } = require("next/server");
import mail from "@/utils/email";

export async function POST(request) {
    try {
        mail()
        return NextResponse.json({
            message: "Correo Enviado",
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
