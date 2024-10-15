import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/Components/NavBar"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Airbnb Carro",
    description: "Proyecto de seminario",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`Ligth`}>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <NavBar/>
                <div className="h-[calc(100vh-5rem)]">
                    <Providers>{children}</Providers>
                </div>
            </body>
        </html>
    );
}
