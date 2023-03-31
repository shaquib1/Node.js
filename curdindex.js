

//creating file using curd operation method.

let fs=require('fs');
let path =require('path');
const dirpath=path.join(__dirname,'crud');

// to create a file inside a folder using curd operation.
const folderpath=`${dirpath}/file1.txt`;

fs.writeFileSync(folderpath,'This is nodejs file which we create using curd operation')

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


