// CRUD operations

const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";

// const //databaseName = mongodb_demo;
// console.log("test");
MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    return console.log("DB not connected successfully");
  }
  console.log("Yay! DB Connected");
});
