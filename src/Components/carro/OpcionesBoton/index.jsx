import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn} from "@nextui-org/react";
import {CopiarDocumentIcon} from "./CopiarDocumentIcon.jsx";
import {EditarIcon} from "./EditarIcon.jsx";
import {EliminarIcon} from "./EliminarIcon.jsx";
import { GuardarIcon } from "./GuardarIcon.jsx";
import {ContactarIcon} from "./ContactarIcon.jsx";

export default function OpcionesBoton() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Opciones
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons" disabledKeys={["edit", "delete"]}>
        
        <DropdownItem
          key="new"
          startContent={<GuardarIcon className={iconClasses} />}
        >
          Guardar
        </DropdownItem>

        <DropdownItem
          key="copy"
          startContent={<CopiarDocumentIcon className={iconClasses} />}
        >
          Copiar link
        </DropdownItem>

        <DropdownItem
          key="copy"
          startContent={<ContactarIcon className={iconClasses} />}
        >
          Contactar
        </DropdownItem>
        
        <DropdownItem
          key="edit"
          startContent={<EditarIcon className={iconClasses} />}
        >
          Editar
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          startContent={<EliminarIcon className={cn(iconClasses, "text-danger")} />}
        >
          Eliminar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}