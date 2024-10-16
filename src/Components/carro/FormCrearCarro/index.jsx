"use client";
import "./formCrearCarro.css";
import axios from "axios";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormCrearCarro() {
    const [carro, setCarro] = useState({
        Nombre: "",
        Marca: "",
        Modelo: "",
        Anio: "",
        PrecioCliente: "",
        Descripcion: "",
        PrecioEstimado: 0,
        Propietario: 0,
        Disponible: 0
    });
    const [imagenes, setImagenes] = useState();
    const router = useRouter();
    
    const handleChange = (e) => {
        setCarro({ ...carro, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const carroActualizado = { ...carro, PrecioEstimado: 0, Propietario: 1, Disponible: 1 }
        setCarro(carroActualizado);
        guardarCarro(carroActualizado)
    }

    const guardarCarro = async (carroActualizado) => {
        const formData = new FormData();
        formData.append('Nombre', carroActualizado.Nombre);
        formData.append('Marca', carroActualizado.Marca);
        formData.append('Modelo', carroActualizado.Modelo);
        formData.append('Anio', carroActualizado.Anio);
        formData.append('PrecioCliente', carroActualizado.PrecioCliente);
        formData.append('Descripcion', carroActualizado.Descripcion);
        formData.append('PrecioEstimado', carroActualizado.PrecioEstimado);
        formData.append('Propietario', carroActualizado.Propietario);
        formData.append('Disponible', carroActualizado.Disponible);
        for (let i = 0; i < imagenes.length; i++) {
            formData.append('Imagenes', imagenes[i]);
        }

        const res = await axios.post('/API/cars', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (res.status === 200 ) 
            router.push('/MisCarros');
         else
            console.log(res.data);
    }

    return (
        <div className="Contenedor-FormCrearCarro">
            <form onSubmit={handleSubmit} >
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input
                        label="Nombre"
                        required
                        autoFocus
                        name="Nombre"
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
                        required
                        name="Marca"
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
                        required
                        name="Modelo"
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
                        required
                        name="Anio"
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
                        required
                        name="PrecioCliente"
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
                        required
                        name="Descripcion"
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
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2">
                    <Input
                        label="Imagenes"
                        required
                        name="Imagen"
                        type="file"
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
                        placeholder="Subir imagen"
                        onChange={(e) => setImagenes(e.target.files)}
                    />
                </div>
                <Button type="submit" color="primary">Publicar</Button>
            </form>
            {imagenes?.length > 0 && 
                <div className="Imagenes-FormCrearCarro">
                    <img src={URL.createObjectURL(imagenes[0])} alt="Carro" className="w-1/2 mx-auto" />
                </div>
            }
            
        </div>
    );
}
