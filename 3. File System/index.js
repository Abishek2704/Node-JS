const fs = require("fs");

// represents the current working directory in terminal cwd() -> represent "." in file system
console.log(process.cwd());
// represent the current file directory
console.log(__dirname);

// console.log(fs);

// create Directory or Folder

if (!fs.existsSync("docs")) {
  fs.mkdir("docs", (err) => {
    if (err) {
      console.log("Folder not created", err.message);
    } else {
      console.log("Folder created Successfully");
    }
  });
}

// remove Directory or Folder

// fs.rmdir('docs',(err)=>{
//     if(err){
//         console.log("Folder not Deleted")
//     }
//     else{
//         console.log("Folder Deleted")
//     }
// })

// create file and write data

fs.writeFile("docs/file.txt", "Dinesh Salem", (err) => {
  if (err) {
    console.log("File not created");
  } else {
    console.log("File created Successfully");
  }
});

// read data from file

fs.readFile("docs/file.txt", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    // Buffer data - we need to convert to readable data
    console.log(data);
    console.log(data.toString());
  }
});

// delete file

setTimeout(() => {
  fs.unlink("docs/file.txt", (err) => {
    if (err) {
      console.log("File not deleted", err.message);
    } else {
      console.log("File deleted Successfully");
    }
  });
},5000);
