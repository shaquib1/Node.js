// make a API

const express = require("express");
const dbconnct = require("./MongoDB31");
const app = express();

app.get("/", async(req, res) => {

let data = await dbconnct();
    data= await data.find().toArray();
 console.log(data);
  res.send(data);
});

app.listen(5000);
