"use client";
import { useUsuarioStore } from "@/store/usuario";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useValidarSesion() {
    const { sesion } = useUsuarioStore();
    const router = useRouter();

    useEffect(() => {
        if (sesion === null) {
            router.push("/Login");
        }
    }, [sesion]);
}
