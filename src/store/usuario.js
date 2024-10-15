import { create } from "zustand";

export const useUsuarioStore = create((set) => ({
    tema: "light",
    token: "",
    setTema: () => set(() => ({ tema: "Dark" })),
    setToken: () =>
        set(() => ({
            token: fetch("https://api.github.com/users/lk3v1nn").then((res) =>
                res.json()
            ),
        })),
}));
