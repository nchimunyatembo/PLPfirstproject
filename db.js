const mysql = require('mysql');
require('dotenv').config();

const pool = createpool({
host: Process.env.DB_HOST,
user: process.env.DB_USER,
database: process.env.DB_NAME,
password: process.env.DB_PASSWORD,
port: process.env.PORT
});
module.exports = pool.promise();