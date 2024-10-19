const { NextResponse } = require("next/server");
import { conn } from "@/libs/mysql";
import {writeFile} from "fs/promises";
import path from "path";
import { v2 as cloudinary } from 'cloudinary';


    // Configuration
    cloudinary.config({ 
        cloud_name: 'dlf4q7ddw', 
        api_key: '493193648931621', 
        api_secret: 'VXA6HRij74i6OHmRkVDWWsaRb0o' // Click 'View API Keys' above to copy your API secret
    });
    
   
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    


export async function GET() {
    try {
        const QueryRespnse = await conn.query("SELECT * FROM CARRO");
        return NextResponse.json(QueryRespnse);    
    } catch (error) {
        return NextResponse.json({message: error.message}, { status: 500 });
    }
    
}

export async function POST(request) {
    try {
        const data = await request.formData();
        const imagenes = data.getAll("Imagenes");

        if (!imagenes || imagenes.length === 0) {
            return NextResponse.json({ message: "No se encontraron archivos de imagen" }, { status: 400 });
        }
        const imagen = imagenes[0];
        if (!(imagen instanceof Blob)) {
            return NextResponse.json({ message: "El archivo de imagen no es válido" }, { status: 400 });
        }

        const bytes = await imagen.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = path.join(process.cwd(), "public", "imagenes", "carros", imagen.name);
        await writeFile(filePath, buffer);

        // subir imagen
        const uploadResult = await cloudinary.uploader
        .upload(filePath)
        .catch((error) => {
            console.log(error);
        });
        
        console.log(uploadResult);
        
        const queryResponse = await conn.query(`INSERT INTO CARRO set?     `, {
            Nombre: data.get("Nombre"),
            Marca: data.get("Marca"),
            Modelo: data.get("Modelo"),
            Anio: data.get("Anio"),
            Descripcion: data.get("Descripcion"),
            PrecioCliente: data.get("PrecioCliente"),
            PrecioEstimado: data.get("PrecioEstimado"),
            Propietario: data.get("Propietario"),
            Disponible: parseInt(data.get("Disponible")) ,
        });

        return NextResponse.json({
            CodigoCarro: queryResponse.insertId,
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({message : error.message}, { status: 500 })


    }
}
