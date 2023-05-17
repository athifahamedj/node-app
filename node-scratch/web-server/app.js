const path = require("path");
const express = require("express");

// console.log(path.join(__dirname, "/public"));

const app = express();
const publicPath = path.join(__dirname + "/public");
app.use(express.static(publicPath));

// console.log(__dirname);
// app.get("", (req, res) => {
//   res.send("<h1>Express JS running up</h1>");
// });

app.get("/home", (req, res) => {
  res.send("This is HOMEPAGE");
});

app.get("/weather", (req, res) => {
  res.send("This is Weather Application");
});

app.listen(3001, () => {
  console.log("server in running on port 3001");
});
