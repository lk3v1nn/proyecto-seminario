import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function Banner() {
  return (
    <div className=" gap-2 grid grid-cols-12 px-8">
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Carros mamadisimos</p>
        <h4 className="text-white font-medium text-large">Todo terreno RR</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://img.freepik.com/fotos-premium/concepto-camion-monstruo-jeep-todoterreno-fondo-pantalla-neon-bosque_758367-10060.jpg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Cuchau</p>
        <h4 className="text-white font-medium text-large">Super deportivo RR</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://imgcdn.stablediffusionweb.com/2024/9/5/073459f8-ad8c-478b-8784-1a430078ce71.jpg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Suaansonfon</p>
        <h4 className="text-white font-medium text-large">Carreritas o que!</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://img.freepik.com/premium-photo/neon-sign-that-says-f1-it_646510-370.jpg"
      />
    </Card>
    
  </div>
  );
}