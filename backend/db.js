const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',    // Your PostgreSQL username
    host: 'localhost',   // Database is on your local machine
    database: 'employeedb',  // Database name
    password: 'admin',  // Your PostgreSQL password
    port: 5432,         // Default PostgreSQL port
});

module.exports = pool;
