const mongoose = require('mongoose');

const ProductSchema=new mongoose.Schema({

    name:String,
    branch:String,
    rollno:Number

});

module.exports=mongoose.model('faculties', ProductSchema);