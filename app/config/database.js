const MAX_CONNECTION_POOLSIZE = 5;

const {
    DB_NAME = 'parking',
    DB_USER = 'root',
    DB_PASS = 'password',
    DB_HOST = 'localhost',
    DB_PORT = 3306,
} = process.env;

module.exports = {
    client: 'mysql2',
    connection: `mysql2://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    pool: { min: 1, max: MAX_CONNECTION_POOLSIZE },
    acquireConnectionTimeout: 5000,
};