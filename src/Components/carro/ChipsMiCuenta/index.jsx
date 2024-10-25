import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default function App() {
    return (
        <div className="flex flex-wrap gap-6">
            <Chip
                variant="shadow"
                classNames={{
                    base: "bg-gradient-to-br from-blue-400 to-blue-700 border-small border-white/50 shadow-pink-400/30",
                    content: "drop-shadow shadow-black text-white",
                }}
            >
                <Link href="/Reservaciones"> Mis Reservaciones </Link>
            </Chip>
            <Chip
                variant="shadow"
                classNames={{
                    base: "bg-gradient-to-br from-blue-400 to-blue-700 border-small border-white/50 shadow-pink-400/30",
                    content: "drop-shadow shadow-black text-white",
                }}
            >
                <Link href="/Reservaciones"> Solicitudes de Mis Carros </Link>
            </Chip>
        </div>
    );
}
