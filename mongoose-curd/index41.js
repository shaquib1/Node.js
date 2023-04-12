//post api using mongoose 

const express=require('express');


require('./config');
const facultie =require('./faculties');

const app= express();


app.post("/", (req,res)=>{

res.send("post api");

})

app.listen(5000);