const express = require('express');
const bodyParser = require("body-parser");
const db = require('./public/database');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//POST
app.post(('/'),(req,res)=>{

})

//GET
app.get(('/'),(req,res)=>{

})











const port = 8080;
app.listen(port, function () {
    console.log(`listening on port ${port}`);
});