// declarations
require('dotenv').config();
// db connection
const connectionString = process.env.CONNECTION_STRING
const pgp = require("pg-promise")();
const db = pgp(connectionString);
const { ENVIROMENT, PORT } = process.env;
const express = require("express");
const app =express();

app.post('/entry', async (res,req) => {

  const {
   entry_text
  } = req.body;
  try {

    //
     const results = await db.query(`INSERT INTO ENTRY (person_id, entry_text) VAUES (1, $1 )  RETURNING *`, [entry_text]);
     res.json(results);
   } catch (err) {
     console.log(err);
   }
});
/*
  person_id int,
  entry_id SERIAL PRIMARY KEY,
  entry_date DATE,
  entry_time TIME,
  entry_text VARCHAR(2000) ,
*/

app.listen(8000, () => {
  console.log(`App is listening 🙂 🙂 `)
})