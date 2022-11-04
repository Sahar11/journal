// declarations
require('dotenv').config();
// db connection
const connectionString = process.env.CONNECTION_STRING
const pgp = require("pg-promise")();
const db = pgp(connectionString);
const { ENVIROMENT, PORT } = process.env;
const express = require("express");
const app =express();

app.post('/', (res,req) => {
  
});

app.listen(8000, () => {
  console.log(`App is listening on ${PORT} :)`)
})