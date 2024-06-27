// import * as fs from "fs";
const fs = require("fs");

// write file
fs.writeFile("abc.txt", "hello write", (err) => {
  if (err) console.log(err);
  else console.log("file created");
});

// read file
fs.readFile("abc.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  else console.log(data); // data will come with hexadecimal data in order to get in english character use "utf8" in as argument in readFile function
});

// append file
fs.appendFile("abc.txt", " appended data", (err) => {
  if (err) console.log(err);
  else console.log("appended data");
});

//renaming file
fs.rename("abc.txt", "data.txt", (err) => {
  if (err) console.log(err);
  else console.log("done");
});

// delete file
fs.unlink("data.txt", (err) => {
  if (err) console.log(err);
  else console.log("deleted");
});

// folder creation
fs.mkdir("utils", (err) => {
  if (err) console.log(err);
  else console.log("created folder");
});

//reading folder
fs.readdir("utils", { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else console.log(files); // it returns array if files and folder, if withFileType true than it return object and  symbol type data from console.log response of file is if 2 == folder 1 == file.
});
// copy files // move files
// and many more  we can do with file system "fs"
