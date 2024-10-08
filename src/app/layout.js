import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

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
        <html lang="es" className={`min-h-screen bg-gradient-to-b from-blue-300 to-blue-900`}>
            <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-b from-blue-300 to-blue-900`}>
                <h1>NavBar</h1>
                <div className="h-[calc(100vh-5rem)]">
                    <Providers>{children}</Providers>
                </div>
            </body>
        </html>
    );
}
