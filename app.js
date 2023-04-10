// const fs = require("fs");

// fs.writeFileSync(
//   "index.txt",
//   "Hi, this is athif. This is me first time running Node.js. "
// );
// fs.appendFileSync(
//   "index.txt",
//   "This is me again appending to the existing file"
// );

// const sumFunc = require("./utils.js");
// const data = require("./utils.js");

// const sumResults = sumFunc(2, 2, -2);
// console.log("<", sumResults);

const getNotes = require("./notes.js");

const results = getNotes();
console.log(results);
