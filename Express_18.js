const express=require('express');
const app = express();


app.get('home',(req,res)=>{
    console.log("data send by browser==>", req.query.name)   //lecture 19 request and respond
    res.send('Hello this is Home page'+ req.query.name);

});

app.get('/about',(req,res)=>{
    res.send('Hello this is aboutus page');

});
app.get('/help',(req,res)=>{
    res.send('Hello this is Help page');

});
app.get('/data',(req,res)=>{
    res.send('Hello this is data page');

});

app.post('/login',(req,res)=>{
    res.send('hello this is login page');
})


// lecture 20
//rendering html and json data on browser
app.get('',(req,res)=>{
   
    res.send("<h1>render html on browser<h1>");

});

app.get('/render',(req,res)=>{
   
    res.send(`
    [
        {
            name:'shaquib',
            roll no:11202615
        }
        {
            name:'shreya',
            roll no:11202610
        }
    ]
    
    
    `);

});



app.listen(5000);