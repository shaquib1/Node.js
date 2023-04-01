//creating file using curd operation method

let fs = require("fs");
let path = require("path");
const dirpath = path.join(__dirname, "curd");

const folderpath = `${dirpath}/file.txt`;

fs.writeFileSync(
  folderpath,
  "This is nodejs file which we create using curd operation"
);
