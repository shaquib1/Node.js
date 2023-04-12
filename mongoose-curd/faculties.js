const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({

name:String,
sub:String,
rollno:Number,
id:Number


}
)

module.exports=mongoose.model('students',ProductSchema);