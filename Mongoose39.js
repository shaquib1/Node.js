const mongoose = require('mongoose');


const main= async()=>{

    await mongoose.connect("mongodb://localhost:27017/erp-management-system");   

    const ProductSchema = new mongoose.Schema({

    name:String,
    sub:String

    });

    const ProductModel = mongoose.model('admin',ProductSchema);
    let data =new ProductModel({name:"Nodejs tutorial",sub:"andorid"});
    let result=await data.save();
    console.log(result);


}

main();