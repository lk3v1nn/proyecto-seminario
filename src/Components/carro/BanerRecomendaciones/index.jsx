import "./style.css";
import { Card, Image, CardFooter } from "@nextui-org/react";
import OpcionesBoton from "../OpcionesBoton";

export default function BannerRecomendaciones() {
    return (
        <div className="contendor-BannerRecomendaciones">
            <h4 className="text-large font-medium">Recomendados</h4>

            <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-3"
            >
                {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                    <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                    </CardHeader> */}
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src="https://i.ytimg.com/vi/-Jupg-ZAF2U/maxresdefault.jpg"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src="https://i.imgur.com/lGlAzbN.jpeg"
                        />
                        <div className="flex flex-col">
                            <p className="text-tiny text-white/60">
                                Aventador SVJ
                            </p>
                            <p className="text-tiny text-white/60">
                                Lamborgini
                            </p>
                            <p className="text-tiny text-white/60">2019</p>
                        </div>
                    </div>
                    <OpcionesBoton />
                </CardFooter>
            </Card>

            <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-3"
            >
                {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                    <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                    </CardHeader> */}
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src="https://i.imgur.com/lGlAzbN.jpeg"
                        />
                        <div className="flex flex-col">
                            <p className="text-tiny text-white/60">
                                Aventador SVJ
                            </p>
                            <p className="text-tiny text-white/60">
                                Lamborgini
                            </p>
                            <p className="text-tiny text-white/60">2019</p>
                        </div>
                    </div>
                    <OpcionesBoton />
                </CardFooter>
            </Card>

            <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-3"
            >
                {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                    <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                    </CardHeader> */}
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            className="rounded-full w-10 h-11 bg-black"
                            src="https://i.imgur.com/lGlAzbN.jpeg"
                        />
                        <div className="flex flex-col">
                            <p className="text-tiny text-white/60">
                                Aventador SVJ
                            </p>
                            <p className="text-tiny text-white/60">
                                Lamborgini
                            </p>
                            <p className="text-tiny text-white/60">2019</p>
                        </div>
                    </div>
                    <OpcionesBoton />
                </CardFooter>
            </Card>
        </div>
    );
}
