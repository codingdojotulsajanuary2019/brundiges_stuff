const { Client } = require('pg');
const fs = require('fs')

const client = new Client({
    database: 'postgres',
    host: 'localhost',
    user: 'postgres',
    password: 'cheeseburger52',
    port: 5432,
});

// Connects to PG database using credentials provided above.
client.connect();



