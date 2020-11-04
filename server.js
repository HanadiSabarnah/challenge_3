const express = require ('express');
const bodyParser = require("body-parser");
const db = require("./database");
const app = express();
const port= 8080;






app.listen(port, function () {
  console.log(`listening on port ${port}`);
});