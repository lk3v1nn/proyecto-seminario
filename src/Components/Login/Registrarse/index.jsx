"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@nextui-org/react";
import { MailIcon } from "../MailIcon";
import { LockIcon } from "../LockIcon";
import { UserIcon } from "../UserIcon";
import { useUsuarioStore } from "@/store/usuario";

export default function Register() {
    const { setSesion } = useUsuarioStore();
    const router = useRouter();
    const [formData, setFormData] = useState({
        Nombre: "",
        Apellido: "",
        Correo: "",
        Contrasena: "",
        CodigoTipoUsuario: 2, // Puedes modificar este valor según lo que necesites
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/API/usuario/registrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Error en el registro del usuario");
            }

            const data = await response.json();
            console.log("Usuario registrado:", data);
            setSesion(data);
            router.push("/Carros");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 max-w-sm mx-auto mt-20 p-8 border border-default-200 rounded-lg shadow-md"
            autoComplete="off"
        >
            <h2 className="text-center text-2xl font-semibold">Regístrate</h2>
            <Input
                type="text"
                label="Nombre"
                placeholder="Tu nombre"
                labelPlacement="outside"
                name="Nombre"
                value={formData.Nombre}
                onChange={handleInputChange}
                autoComplete="off"
                startContent={
                    <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
            />
            <Input
                type="text"
                label="Apellido"
                placeholder="Tu apellido"
                labelPlacement="outside"
                name="Apellido"
                value={formData.Apellido}
                onChange={handleInputChange}
                autoComplete="off"
                startContent={
                    <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
            />
            <Input
                type="email"
                label="Correo Electrónico"
                placeholder="you@example.com"
                labelPlacement="outside"
                name="Correo"
                value={formData.Correo}
                onChange={handleInputChange}
                autoComplete="off"
                startContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
            />
            <Input
                type="password"
                label="Contraseña"
                placeholder="Tu contraseña"
                labelPlacement="outside"
                name="Contrasena"
                value={formData.Contrasena}
                onChange={handleInputChange}
                autoComplete="off"
                startContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
            />
            <Button type="submit" color="primary" className="w-full mt-4">
                Registrarse
            </Button>
            <div className="text-center mt-4">
                <span className="text-default-500">
                    ¿Ya tienes una cuenta?{" "}
                </span>
                <a href="/Login" className="text-primary-500 hover:underline">
                    Iniciar Sesión
                </a>
            </div>
        </form>
    );
}
