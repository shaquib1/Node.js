const mongoose = require('mongoose');


const main= async()=>{

    await mongoose.connect("mongodb://localhost:27017/erp-management-system");   

    const ProductSchema = new mongoose.Schema({

    name:String

    });

    const ProductModel = mongoose.model('admin',ProductSchema);
    let data =new ProductModel({name:"shreya"});
    let result=await data.save();
    console.log(result);


}

main();