const express =require('express');

const app=express();



app.get('/',(req,res)=>{
    res.send('hello this is home page');
});

app.get('/about',(req,res)=>{
    res.send('welcome to about page');
});







app.listen(3030);

