const express = require("express");
const PORT = 9000;
const app =express();

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT} :)`)
})