console.log("hello");
//console.log(document); -> DOM can't be accessed using Node JS
// console.log(window) -> Window can't be accessed uing Node JS

console.log(global);

// We can use the same sync,async,callback,promises in this node js

function cb1(cb2) {
  console.log("From Callback 1");
  cb2();
}

function cb2() {
  console.log("From Callback 2");
}

function call(cb1) {
  console.log("From First Function");
  cb1(cb2);
}

call(cb1);
