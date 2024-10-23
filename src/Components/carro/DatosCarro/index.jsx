import {Divider} from "@nextui-org/react";

export default function DatosCarro({carro}) {
  return (
    <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-large font-medium">{carro?.Nombre}</h4>
        <p className="text-medium text-default-400">{carro?.Descripcion}</p>
      </div>
      <Divider className="my-4" />
      <div className="flex h-2 items-center space-x-2 text-large">
        <div className="font-bold text-gray-600">Marca:</div>
        <div>{carro?.Marca}</div>
        <Divider orientation="vertical" />
        <div className="font-bold text-gray-600">Modelo:</div>
        <div>{carro?.Modelo}</div>
        <Divider orientation="vertical" />
        <div className="font-bold text-gray-600">Precio:</div>
        <div>{carro?.PrecioCliente}</div>
      </div>
    </div>
  );
}