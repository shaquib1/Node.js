// Remove extension from url and 404 page.

const express = require('express');
const path=require('path');

const app=express();
const publicpath=path.join(__dirname,'public');


app.get('',(req,res)=>{
    res.sendFile(`${publicpath}/about.html`);
});

app.get('/home',(req,res)=>{
    res.sendFile(`${publicpath}/home.html`);
});
app.get('/help',(req,res)=>{
    res.sendFile(`${publicpath}/help.html`);
});

app.get('*',(req,res)=>{
    res.sendFile(`${publicpath}/404.html`);
});

app.set('view engine','ejs');
app.get('/profile',(req,res)=>{
    res.render('profile');
});


app.listen(2000);
