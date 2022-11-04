// db connection
const connectionString = process.env.CONNECTION_STRING
const pgp = require("pg-promise")();
const db = pgp(connectionString);
const express = require("express");
const PORT = 9000;
const app =express();

app.post('/', (res,req) => {
  
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT} :)`)
})