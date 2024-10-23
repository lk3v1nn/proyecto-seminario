import {Divider} from "@nextui-org/react";

export default function DatosCarro({carro}) {
  return (
    <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-large font-semibold text-[#0974ee]">{carro?.Nombre}</h4>
        <p className="text-medium ">{carro?.Descripcion}</p>
      </div>
      <Divider className="my-4" />
      <div className="flex h-2 items-center space-x-2 text-large">
        <div className="font-semibold text-[#0974ee]">Marca:</div>
        <div>{carro?.Marca}</div>
        <Divider orientation="vertical" />
        <div className="font-semibold text-[#0974ee]">Modelo:</div>
        <div>{carro?.Modelo}</div>
        <Divider orientation="vertical" />
        <div className="font-semibold text-[#0974ee]">Precio:</div>
        <div>{carro?.PrecioCliente}</div>
      </div>
    </div>
  );
}