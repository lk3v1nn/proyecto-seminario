export default async function reservarCarro(
    CodigoUsuarioSolicita,
    CodigoCarro,
    FechaSolicitud,
    FechaRespuesta,
    Aprobado
) {
    const nuevaReserva = {
        CodigoUsuarioSolicita,
        CodigoCarro,
        FechaSolicitud: FechaSolicitud
            ? convertirFechaMySQL(FechaSolicitud)
            : null, // Convertir al formato MySQL
        FechaRespuesta: FechaRespuesta
            ? convertirFechaMySQL(FechaRespuesta)
            : null,
        Aprobado,
    };
    await crearReserva(nuevaReserva);

    async function crearReserva(data) {
        try {
            const response = await fetch("/API/solicitudRenta", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${errorData.message}`);
            }

            const result = await response.json();
            console.log("Reserva creada con éxito:", result);
            return result;
        } catch (error) {
            console.error("Error al crear la reserva:", error.message);
        }
    }

    function convertirFechaMySQL(fechaISO) {
        const fecha = new Date(fechaISO);
        const anio = fecha.getFullYear();
        const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Mes comienza desde 0
        const dia = String(fecha.getDate()).padStart(2, "0");
        const horas = String(fecha.getHours()).padStart(2, "0");
        const minutos = String(fecha.getMinutes()).padStart(2, "0");
        const segundos = String(fecha.getSeconds()).padStart(2, "0");

        return `${anio}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
    }
}
