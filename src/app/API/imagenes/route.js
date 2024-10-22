const { NextResponse } = require("next/server");
import { conn } from "@/libs/mysql";
import { writeFile } from "fs/promises";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

// Configuration
cloudinary.config({
    cloud_name: "dlf4q7ddw",
    api_key: "493193648931621",
    api_secret: "VXA6HRij74i6OHmRkVDWWsaRb0o", // Click 'View API Keys' above to copy your API secret
});

export async function POST(request) {
    try {
        const data = await request.formData();
        const imagenes = data.getAll("Imagenes");

        if (!imagenes || imagenes.length === 0) {
            return NextResponse.json(
                { message: "No se encontraron archivos de imagen" },
                { status: 400 }
            );
        }
        const imagen = imagenes[0];
        if (!(imagen instanceof Blob)) {
            return NextResponse.json(
                { message: "El archivo de imagen no es válido" },
                { status: 400 }
            );
        }

        const bytes = await imagen.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = path.join(
            process.cwd(),
            "public",
            "imagenes",
            "carros",
            imagen.name
        );
        await writeFile(filePath, buffer);

        // subir imagen
        const uploadResult = await cloudinary.uploader
            .upload(filePath)
            .catch((error) => {
                console.log(error);
            });

        console.log(uploadResult.public_id);

        const queryResponse = await conn.query(`INSERT INTO ImagenCarro set?     `, {
            url: uploadResult.url,
            CodigoCarro: data.get("CodigoCarro"),
            IdImagen: uploadResult.public_id,
        });

        return NextResponse.json({
            CodigoImagen: uploadResult,
            message: "Imagen subida exitosamente",
            queryResponse: queryResponse,
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json(
                { message: "El ID de la imagen es requerido" },
                { status: 400 }
            );
        }

        const result = await cloudinary.uploader.destroy(id);

        if (result.result == "ok") {
            return NextResponse.json(
                { message: "Imagen eliminada exitosamente" },
                { status: 200 }
            );
        }

        return NextResponse.json(
            { message: "No se pudo eliminar la imagen" },
            { status: 500 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Error al eliminar la imagen", details: error.message },
            { status: 500 }
        );
    }
}
