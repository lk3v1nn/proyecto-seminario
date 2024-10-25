// store/usuario.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUsuarioStore = create(
  persist(
    (set) => ({
      tema: "light",
      setTema: () =>
        set((state) => ({ tema: state.tema === "light" ? "dark" : "light" })),
      sesion: null,
      setSesion: (data) => set(() => ({ sesion: data })),
    }),
    {
      name: "usuario-storage", // Nombre de la clave en Local Storage
      getStorage: () => localStorage, // Uso de Local Storage
    }
  )
);
