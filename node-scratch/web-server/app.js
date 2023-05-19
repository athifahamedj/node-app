const path = require("path");
const hbs = require("hbs");
const express = require("express");

// console.log(path.join(__dirname, "/public"));

const app = express();
const publicPath = path.join(__dirname, "/public");
const viewpath = path.join(__dirname, "./templates/views");

const partialPath = path.join(__dirname, "./templates/partials");

hbs.registerPartials(partialPath);

app.set("view engine", "hbs");
app.set("views", viewpath);
app.use(express.static(publicPath));

app.get("/weather", (req, res) => {
  if (!req.query.search) {
    res.send({
      error: "NO search query exists",
    });
  }
  // console.log(req.query.search);
  res.send({
    response: "Success",
    data: req.query.search,
  });
});

// console.log(__dirname);
app.get("", (req, res) => {
  res.render("index", {
    title: "Index",
    name: "Athif",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Athif",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Athif",
    message: "This page helps you with whatever you need to know!!",
  });
});

app.get("/help/*", (req, res) => {
  res.send("No help article found");
});

app.get("*", (req, res) => {
  res.send("No page found");
});

app.listen(3001, () => {
  console.log("server in running on port 3001");
});
