import pg from 'pg';
const { Client } = pg;

const config = {
    user: 'db_movies2_user',
    host: 'dpg-d1vedpk9c44c73dpq2u0-a.oregon-postgres.render.com',
    database: 'db_movies2',
    password: 'InF3YWpevemuHLbhHpIs5fRnBCrRmmaE',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
}
export async function conectar() {
    const cliente = new Client(config);
    try {
        await cliente.connect();
        console.log('Conexión exitosa a la base de datos');
        return cliente;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error;
    }
}
export async function ConsultarPeliculas() {
    const cliente = await conectar();
    try {
        const res = await cliente.query('SELECT * FROM peliculas');
        return res.rows;
    } catch (error) {
        console.error('Error al consultar las películas:', error);
        throw error;
    } finally {
        await cliente.end();
    }
}