"use client";
import "./formSubirImagenCarro.css";
import axios from "axios";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function FormSubirImagenCarro({ CodigoCarro }) {
    const [imagenes, setImagenes] = useState([]);
    const [imagenesPrevias, setImagenesPrevias] = useState([]);
    const inputRef = useRef(null); // Referencia para el input de archivo
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await guardarImagen(CodigoCarro);
    };

    const guardarImagen = async (CodigoCarro) => {
        for (let i = 0; i < imagenes.length; i++) {
            const formData = new FormData();
            formData.append("CodigoCarro", CodigoCarro);
            formData.append("Imagenes", imagenes[i]);

            try {
                const res = await axios.post(`/API/imagenes`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                if (res.status === 200) {
                    console.log(res.data);

                    // Agregar la URL de la imagen subida a la lista de imágenes previas
                    const nuevaImagen = res?.data?.CodigoImagen?.url;
                    if (nuevaImagen) {
                        setImagenesPrevias((prev) => [...prev, nuevaImagen]);
                    }

                    // Reinicia el estado y el input de archivos
                    setImagenes([]);
                    if (inputRef.current) {
                        inputRef.current.value = ""; // Reinicia el valor del input
                    }
                } else {
                    console.log(res.data);
                }
            } catch (error) {
                console.error("Error al subir la imagen:", error);
            }
        }
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImagenes(files);
    };

    return (
        <div className="Contenedor-FormSubirImagenCarro">
            <form onSubmit={handleSubmit}>
                <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 mt-2">
                    <Input
                        ref={inputRef} // Asigna la referencia al input
                        label="Imagenes del carro"
                        required
                        name="Imagen"
                        type="file"
                        multiple
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
                        onChange={handleImageChange}
                    />
                </div>
                <Button type="submit" color="primary">
                    Subir imagen
                </Button>
                {imagenesPrevias.length > 0 && (
                    <Button
                        onClick={() => router.push("/MisCarros")}
                        color="primary"
                    >
                        Finalizar
                    </Button>
                )}
            </form>

            {/* Mostrar las imágenes subidas */}
            {imagenesPrevias.length > 0 && (
                <div className="Imagenes-FormSubirImagenCarro">
                    {imagenesPrevias.map((imagen, index) => (
                        <img
                            key={index}
                            src={imagen}
                            alt={`Carro ${index + 1}`}
                            className="w-1/2 mx-auto mb-4"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
