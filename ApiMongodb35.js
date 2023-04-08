// make a basic API
// all api get, post ,put and delete method api

const express = require("express");
const dbconnct = require("./MongoDB31");
const app = express();

app.use(express.json());

//get Api 
app.get("/", async(req, res) => {

let data = await dbconnct();
    data= await data.find().toArray();
 console.log(data);
  res.send(data);
});


//post Api

app.post("/",async(req,res)=>{
 let data = await dbconnct();
 let result = await data.insertOne(req.body);

res.send(result)

})

// put Api

app.put("/", async (req, res)=>{

  let data= await dbconnct();
  let result= await data.updateOne(
    {name:'ajit'},
    {$set:req.body}
    
    )

  res.send(result);
})



app.listen(5000);
