export default async function realizarSelect(sql) {
    try {
        const response = await fetch("/API/BD/select", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ consulta: sql }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error: ${errorData.message}`);
        }

        const result = await response.json();
        console.log("Resultado de la consulta:", result);
        return result;
    } catch (error) {
        console.error("Error al realizar la consulta:", error.message);
        return []
    }
}
