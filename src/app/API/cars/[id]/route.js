import { NextResponse } from "next/server"

export function PUT(){
    return NextResponse.json({message: "Actualizando carro"})
}

export function DELETE(){
    return NextResponse.json({message: "Eliminando carro"})
}

export function GET(){
    return NextResponse.json({message: "Listando un carro"})
}