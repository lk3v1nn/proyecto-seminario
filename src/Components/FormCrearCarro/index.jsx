"use client";
import "./formCrearCarro.css";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
// import {MailIcon} from './MailIcon';
import { useState } from "react";

export default function FormCrearCarro() {
    const [carro, setCarro] = useState({
        nombre: "",
        marca: "",
        modelo: "",
        anio: "",
        precio: "",
        descripcion: "",
    });
    const handleChange = (e) => {
        console.log(e.target);
    };
    return (
        <form className="Contenedor-FormCrearCarro">
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input
                    label="Nombre"
                    type="text"
                    isClearable
                    radius="lg"
                    classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                            "shadow-xl",
                            "bg-default-200/50",
                            "dark:bg-default/60",
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            "hover:bg-default-200/70",
                            "dark:hover:bg-default/70",
                            "group-data-[focus=true]/input:bg-default-200/50",
                            "dark:group-data-[focus=true]/input:bg-default/60",
                            "!cursor-text",
                        ],
                    }}
                    placeholder="Ingrese un titulo para la publicacion"
                    onChange={handleChange}
                />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input
                    label="Marca"
                    type="text"
                    isClearable
                    radius="lg"
                    classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                            "shadow-xl",
                            "bg-default-200/50",
                            "dark:bg-default/60",
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            "hover:bg-default-200/70",
                            "dark:hover:bg-default/70",
                            "group-data-[focus=true]/input:bg-default-200/50",
                            "dark:group-data-[focus=true]/input:bg-default/60",
                            "!cursor-text",
                        ],
                    }}
                    placeholder="Ingrese la marca del vehiculo"
                    onChange={handleChange}
                />
                <Input
                    label="Modelo/Linea"
                    type="text"
                    isClearable
                    radius="lg"
                    classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                            "shadow-xl",
                            "bg-default-200/50",
                            "dark:bg-default/60",
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            "hover:bg-default-200/70",
                            "dark:hover:bg-default/70",
                            "group-data-[focus=true]/input:bg-default-200/50",
                            "dark:group-data-[focus=true]/input:bg-default/60",
                            "!cursor-text",
                        ],
                    }}
                    placeholder="Ingrese el modelo del vehiculo"
                    onChange={handleChange}
                />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input
                    label="Año"
                    type="number"
                    isClearable
                    radius="lg"
                    classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                            "shadow-xl",
                            "bg-default-200/50",
                            "dark:bg-default/60",
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            "hover:bg-default-200/70",
                            "dark:hover:bg-default/70",
                            "group-data-[focus=true]/input:bg-default-200/50",
                            "dark:group-data-[focus=true]/input:bg-default/60",
                            "!cursor-text",
                        ],
                    }}
                    placeholder="Ingrese el año del vehiculo"
                    onChange={handleChange}
                />
                <Input
                    label="Precio"
                    type="number"
                    isClearable
                    radius="lg"
                    classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                            "shadow-xl",
                            "bg-default-200/50",
                            "dark:bg-default/60",
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            "hover:bg-default-200/70",
                            "dark:hover:bg-default/70",
                            "group-data-[focus=true]/input:bg-default-200/50",
                            "dark:group-data-[focus=true]/input:bg-default/60",
                            "!cursor-text",
                        ],
                    }}
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">
                                Q
                            </span>
                        </div>
                    }
                    placeholder="0.00"
                    onChange={handleChange}
                />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Textarea
                    label="Descripcion"
                    placeholder="Ingresa mas detalles del vehiculo"
                    classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                            "shadow-xl",
                            "bg-default-200/50",
                            "dark:bg-default/60",
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            "hover:bg-default-200/70",
                            "dark:hover:bg-default/70",
                            "group-data-[focus=true]/input:bg-default-200/50",
                            "dark:group-data-[focus=true]/input:bg-default/60",
                            "!cursor-text",
                        ],
                    }}
                    onChange={handleChange}
                />
            </div>
            <Button color="primary">Publicar</Button>
        </form>
    );
}
