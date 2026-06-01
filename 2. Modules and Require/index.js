// If we import data from other file it will exceute all the code that is present in that file
// while importing data it sends us as and object data {} 
// 1st method
const data = require("./data");
// 2nd method 
const { arr1, arr2 } = require("./data");

console.log(data);
console.log(data.arr1);

console.log(arr1);
