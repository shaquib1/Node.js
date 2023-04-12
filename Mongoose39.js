// curd operation with mongoose

const mongoose = require("mongoose");


   mongoose.connect("mongodb://localhost:27017/erp-management-system");

  const ProductSchema = new mongoose.Schema({
    name: String,
    sub: String,
    rollno: Number,
    id: Number,
    pass:Number
  });

  const main=async ()=>{
  const ProductModel = mongoose.model("students", ProductSchema);
  let data = new ProductModel({
    name: "shreya",
    sub: "andorid",
    rollno: 11202263,
    id: 123,
    pass:321
  });
  let result = await data.save();
  console.log(result);

  };


  const updateInDb = async()=>{
    const ProductModel = mongoose.model("students", ProductSchema);
     let data= await ProductModel.updateOne(
      {name:'shreya'},
      {
        $set:{rollno:11202615}
      }
     )
     console.log(data);
  }

  
  const deleteInDb=async()=>{
    const ProductModel = mongoose.model("students", ProductSchema);
  let data = await ProductModel.deleteOne(
    {name:'s'}
  )
  console.log(data);
  }

  
  const findInDb =async()=>{

    const ProductModel = mongoose.model("students", ProductSchema);
   let data =await ProductModel.find(
    {name:'shreya'}
   );
   console.log(data);

  }

  findInDb();