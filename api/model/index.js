const dotenv = require("dotenv");
dotenv.config();
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
/*
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

async function connect(){
  try{
    await client.connect()
  }
  catch (e) {
    console.error(`erreur ${e}`)

  }
}

await connect();*/
