// In this we know how to read files from a folder

let fs = require("fs");
let path = require("path");
let dirpath = path.join(__dirname, "folder");
// console.log(dirpath);

//for creating list of file in a folder
for (i = 0; i < 5; i++) {
  fs.writeFileSync(
    dirpath + "/hello" + i + ".txt",
    "a simple file in we created"
  );
  //fs.writeFilesync(`hello${i}.txt`,"this is a simple file which we created")
}

//for reading files form forlder in array form
fs.readdir(dirpath, (err, folder) => {
  console.log(folder);
});

//for reading files from folder
fs.readdir(dirpath, (err, folder) => {
  folder.forEach((item) => {
    console.log(item);
  });
});
