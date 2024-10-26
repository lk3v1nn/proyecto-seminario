import mysql from "serverless-mysql";

export const conn = mysql({
    config: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        ssl: {
            ca: process.env.DB_CA_CERT,
            rejectUnauthorized: false,
        },
    },
});

export async function query(sql, values) {
    try {
        const results = await conn.query(sql, values);
        return results;
    } catch (error) {
        console.error("Error en la consulta:", error);
        throw error;
    } finally {
        await conn.end();  // Cierra la conexión correctamente
    }
}
