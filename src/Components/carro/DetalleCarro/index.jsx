import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import OpcionesBoton from "../OpcionesBoton";
import Comentario from "../Comentario";

export default function DetalleCarro() {

  return (
    <>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-1 px-8">
      
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-2xl">Acme camera</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://nextui.org/images/card-example-6.jpeg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>

      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
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
              <p className="text-tiny text-white/60">Aventador SVJ</p>
              <p className="text-tiny text-white/60">Lamborgini</p>
              <p className="text-tiny text-white/60">2019</p>
            </div>
          </div>
          <OpcionesBoton/>
        </CardFooter>
      </Card>
      </div>

      <div className="flex gap-2 px-8 mt-4 justify-center flex-wrap">
          <Comentario />
          <Comentario />
          <Comentario />
      </div>

    </>
  );
}