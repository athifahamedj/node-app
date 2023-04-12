const fs = require("fs");
// const jsonRaw = require("./data.json");

// const parsedData = JSON.stringify(jsonRaw);

const getData = fs.readFileSync("./data.json");
const result = getData.toString();
const parsedData = JSON.parse(result);
// console.log(parsedData);

parsedData.name = "Man's search for meaning";

// const changedData = (parsedData.name = "Man's search for meaning");
const results = JSON.stringify(parsedData);
fs.writeFileSync("./data.json", results);
