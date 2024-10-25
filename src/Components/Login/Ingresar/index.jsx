"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button } from "@nextui-org/react";
import { MailIcon } from "../MailIcon";
import { LockIcon } from "../LockIcon";
import {useUsuarioStore} from "@/store/usuario";

export default function Login() {
  const [formData, setFormData] = useState({ Correo: "", Contrasena: "" });
  const [error, setError] = useState("");
  const {setSesion } = useUsuarioStore();
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/API/usuario/ingresar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Error al iniciar sesión");
      }

      const data = await response.json();
      console.log("Usuario autenticado:", data);
      setSesion(data);
      router.push("/Carros");
    } catch (error) {
      console.log(error.message);
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 max-w-sm mx-auto mt-20 p-8 border border-default-200 rounded-lg shadow-md"
      autoComplete="off"
    >
      <h2 className="text-center text-2xl font-semibold">Iniciar Sesión</h2>
      <Input
        type="email"
        label="Correo Electrónico"
        placeholder="you@example.com"
        labelPlacement="outside"
        name="Correo"
        value={formData.Correo}
        onChange={handleInputChange}
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
        startContent={
          <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
      />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <Button type="submit" color="primary" className="w-full mt-4">
        Iniciar Sesión
      </Button>
      <div className="text-center mt-4">
        <span className="text-default-500">¿No tienes una cuenta? </span>
        <a href="/Registrarse" className="text-primary-500 hover:underline">
          Regístrate
        </a>
      </div>
    </form>
  );
}
