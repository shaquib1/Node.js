// make html foder

const express=require('express');
const path=require('path');

const app=express();
const publicpath = path.join(__dirname,'public');

app.get('',(req,res)=>{
    res.send('hello this is home page')

})

app.use(express.static(publicpath));

app.listen(2000);
