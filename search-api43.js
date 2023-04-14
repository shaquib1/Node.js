const express=require('express');
require('./config');
const faculty=require('./faculty');
const app = express();

app.use(express.json());

app.get("/search/:key", async(req,res)=>{

     console.log(req.params.key)
    let data = await faculty.find(
        {
            
        }
    )
    res.send(data);
})


app.listen(3000)