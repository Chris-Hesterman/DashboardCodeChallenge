require('custom-env').env('testing'); //comment out when not testing
// require('custom-env').env();       //coment out when testing
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  port: 5432
});

module.exports = pool;
