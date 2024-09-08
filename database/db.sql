CREATE TABLE CARRO(
    CodigoCarro INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Marca VARCHAR(255) NOT NULL,
    Modelo VARCHAR(255) NOT NULL,
    Anio INT NOT NULL,
    PrecioCliente INT NOT NULL,
    PrecioEstimado int NOT NULL,
    Propietario int NOT NULL
);

alter table 
add 

CREATE TABLE CLIENTE(
    CodigoUsuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Apellido VARCHAR(255) NOT NULL,
    Correo VARCHAR(255) NOT NULL,
    Contrasena VARCHAR(255) NOT NULL,
    TipoUsuario int NOT NULL
);