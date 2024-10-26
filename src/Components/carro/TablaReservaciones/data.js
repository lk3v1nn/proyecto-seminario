// const columns = [
//     {name: "NAME", uid: "name"},
//     {name: "ROLE", uid: "role"},
//     {name: "STATUS", uid: "status"},
//     {name: "ACTIONS", uid: "actions"},
//   ];

const columns = [
      {name: "Fecha Solicitud", uid: "FechaSolicitud"},
      {name: "Marca", uid: "Marca"},
      {name: "Modelo", uid: "Modelo"},
      {name: "Año", uid: "Anio"},
      {name: "Precio", uid: "Precio"},
      {name: "Aprobado", uid: "status"},
    ];
  
  const users = [
    {
      id: 45,
      FechaSolicitud: "25/10/2024",
      Marca: "Volswatguen",
      Modelo: "Jetta",
      Anio: "2001",
      Precio: "29",
      Nombre: "Kevin",
      Apellido: "Lopez",
      Aprobado: 1,
      url: "http://res.cloudinary.com/dlf4q7ddw/image/upload/v1729575798/yc97nugbw30isy9s4vpv.png",
    },
    {
      id: 2,
      name: "Zoey Lang",
      role: "Technical Lead",
      team: "Development",
      status: "paused",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: "zoey.lang@example.com",
    },
    {
      id: 3,
      name: "Jane Fisher",
      role: "Senior Developer",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      email: "jane.fisher@example.com",
    },
    {
      id: 4,
      name: "William Howard",
      role: "Community Manager",
      team: "Marketing",
      status: "vacation",
      age: "28",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      email: "william.howard@example.com",
    },
    {
      id: 5,
      name: "Kristen Copper",
      role: "Sales Manager",
      team: "Sales",
      status: "active",
      age: "24",
      avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      email: "kristen.cooper@example.com",
    },
  ];
  
  export {columns, users};