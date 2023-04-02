// EJS template engine 

const express= require('express');
const app=express();



app.set('view engine','ejs');
app.get('/profile',(req, res)=>{

    res.render('profile');

});

app.listen(6000);