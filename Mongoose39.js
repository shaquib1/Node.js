const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/erp-management-system");

  const ProductSchema = new mongoose.Schema({
    name: String,
    sub: String,
    rollno: Number,
    id: Number,
  });

  const ProductModel = mongoose.model("students", ProductSchema);
  let data = new ProductModel({
    name: "shaquib",
    sub: "andorid",
    rollno: 11202263,
    id: 123,
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const ProductModel = mongoose.model("students", ProductSchema);
  let data = await ProductModel.updateOne(
    {
      name: "Nodejs tutorial",
    },
    {
      $set: { rollno: 11202615 },
    }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const ProductModel = mongoose.model("students", ProductSchema);
  let data = await ProductModel.deleteOne({ name: "shaquib" });
  console.log(data);
};

deleteInDB();

const findInDB =()=>{
  
}