import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
} from "@nextui-org/react";
import { Busqueda } from "./Busqueda";
import { Logo } from "./Logo";

export default function NavBar() {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Logo />
          <p className="hidden sm:block font-bold text-inherit">AirBnb Carro</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="/Carros">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/Reservaciones" aria-current="page" >
              Reservaciones
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/CrearCarro">
              Publicar
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[12rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Escribe tu búsqueda."
          size="sm"
          startContent={<Busqueda size={18} />}
          type="search"
        />

        {/* Alternativa usando Popover */}
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Avatar
              isBordered
              className="cursor-pointer transition-transform"
              color="primary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col p-4">
              <Link href="/MisCarros" className="font-semibold">Mi cuenta</Link>
              <Link href="#" className="font-semibold">Configuracion</Link>
              <Link href="#" className="text-danger-500 cursor-pointer">Cerrar Sesion</Link>
            </div>
          </PopoverContent>
        </Popover>
      </NavbarContent>
    </Navbar>
  );
}
