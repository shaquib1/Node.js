// Remove extension from url and 404 page.

const express = require('express');
const path=require('path');

const app=express();
const publicpath=path.join(__dirname,'public');

app.set('view engine','ejs');  //use ejs template 


app.get('',(req,res)=>{
    res.sendFile(`${publicpath}/about.html`);
});

// use ejs template lecture 23

app.get('/profile',(req,res)=>{
   const user={
    name:'shaquib',
    email:'shaquib@gamil.com',
    city:'ambala'
   }
    res.render('profile',{user});
});
//ejs with comman file means use header file in every file 
app.get('/login',(req,res)=>{

     res.render('login');
    
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


app.listen(2000);
