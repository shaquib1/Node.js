//let app = require('./app.js')

//console.log("shaquib")
//console.warn("node.js")

//console.log(app)
//console.log(app.s)

//how to import file system and use them
//let fs=require('fs'); //file system used to create file
//fs.writeFileSync('test.txt2', "This is 2nd file")

//this is another and best way to use file system.
//let fs = require('fs').writeFileSync;
//fs("code.txt","code is good for coder")

//console.log(__dirname)   //use to check directory
//console.log(__filename)   //use to check directory with file name

//how to use pakage by require method
//const colors = require('colors');
//console.log("Hello this is color testing".red);

//console.log("nodemon package")

//creating file using curd operation method.

let fs = require("fs");
let path = require("path");
const dirpath = path.join(__dirname, "crud");

// to create a file inside a folder using curd operation.
const folderpath = `${dirpath}/file.txt`;

//fs.writeFileSync(folderpath,'This is nodejs file which we create using curd operation')

//to read a file from folder using curd operation.
//fs.readFile(folderpath,'utf8',(err,item)=>{
//console.log(item);
//})

//update a file using curd operatoin.
//fs.appendFile(folderpath,'and this text add in curd folder',(err)=>{
//   if(!err) console.log("file is updated");
//})

// rename a file from curd operation
//fs.rename(folderpath,`${dirpath}/file2.txt`,(err)=>{
//  if(!err) console.log("file name is renamed");
//})

// to delete a file from a folder using curd method
//fs.unlinkSync(`${dirpath}/file2.txt`)
