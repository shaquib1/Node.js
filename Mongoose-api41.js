const express =require('express');

require('./config');

const faculty=require('./faculty');

const app = express();
app.use(express.json);

app.post("/create",(req,res)=>{

   console.log(req.body);
    res.send("post done");
});

app.listen(5000);