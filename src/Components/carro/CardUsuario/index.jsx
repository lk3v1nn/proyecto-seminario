import { Card, CardHeader, Image, CardFooter, Button } from "@nextui-org/react";

export default function CardUsuario({className, children}) {

    return (
        <div className=" gap-2 grid grid-cols-12 grid-rows-1 px-8">
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-2">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">Usuario</p>
                <h4 className="text-black font-medium text-2xl">mencho</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="https://i.imgur.com/lGlAzbN.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                <p className="text-black text-tiny">El mencho velasquez.</p>
                <p className="text-black text-tiny">no fake</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                Contactar
                </Button>
            </CardFooter>
            </Card>
         </div>
    )
}