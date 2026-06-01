const fs = require("fs");

// using normal readFile function will take time to load all the data at one time
// so we can use stream buffer to load in chuncks(small part)
// fs.readFile('./4. Stream and Buffer/data.txt',(err,data)=>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         console.log(data.toString())
//     }
// })


// readStream - reads data in chuncks
const readStream = fs.createReadStream("./4. Stream and Buffer/data.txt", {
  encoding: "utf-8",
});

readStream.on("data", (buffer) => {
  console.log("\n New Buffer \n");
  console.log(buffer);
});


// writeStream - write data in chuncks 
const writeStream = fs.createWriteStream('./4. Stream and Buffer/copyData.txt');

readStream.on('data',(buffer)=>{
    writeStream.write("\nNew Chunck\n")
    writeStream.write(buffer);
})