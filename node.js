const fs = require("fs");

fs.writeFileSync(
  "index.txt",
  "Hi, this is athif. This is me first time running Node.js. "
);
fs.appendFileSync(
  "index.txt",
  "This is me again appending to the existing file"
);
