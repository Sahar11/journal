// declarations
require('dotenv').config();
// db connection
const connectionString = process.env.CONNECTION_STRING
const pgp = require("pg-promise")();
const db = pgp(connectionString);
const { ENVIROMENT, PORT } = process.env;
const express = require("express");
const cors = require('cors');
const app =express();
app.use(cors());

app.post('/entry', async (res,req) => {

  console.log("ANSWER:" , req.body)
  // const {
  //  entry_text
  // } = req.body;
  // try {

  //   //
  //    const results = await db.query(`INSERT INTO ENTRY (person_id, entry_text) VAUES (1, $1 )  RETURNING *`, [entry_text]);
  //    res.json(results);
  //  } catch (err) {
  //    console.log(err);
  //  }
});

app.listen(9000, () => {
  console.log(`App is listening 🙂 🙂 `)
})