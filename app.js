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

// const getNotes = require("./notes.js");
// const results = getNotes();

// console.log(results);

// const validator = require("validator");
// console.log(validator.isEmail("athif@gmail.com"));
// console.log(validator.isURL("http://www.google.com"));

const chalk = require("chalk");

console.log(chalk.blue.inverse.bgRed.bold("Its", "nodemon"));

const yargs = require("yargs");
yargs.command({
  command: "list",
  describe: "list a note",
  handler: function () {
    console.log("listed the note");
  },
});
console.log(yargs.argv);
