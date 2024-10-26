import mysql from "serverless-mysql";

export const conn = mysql({
    config: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        ssl: {
            rejectUnauthorized: false, // para ignorar la verificación de certificados
        },
    },
});
