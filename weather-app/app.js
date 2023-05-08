const request = require("request");
const { exit } = require("yargs");

// const dynamicURL = (url) => {
//   // console.log(url);
//   const data = request({ url: url, json: true }, (error, response) => {
//     if (response.body.length === 0) {
//       console.log("check your lat/long");
//     } else {
//       const result = `It feels like ${response.body.main.feels_like} in ${response.body.name};`;
//     }
//   });
//   return data;
// };

// const lat = "13.028900";
// const lon = "80.239487";
// const url =
//   "https://api.openweathermap.org/data/2.5/weather?&lat=" +
//   lat +
//   "&lon=" +
//   lon +
//   "&appid=6fb944ff2c125a9135bad967a9e20a1a";

// const data = dynamicURL(url);

///////////////////////////////////////////////////
// console.log(data);

// const url = "https://api.openweathermap.org/data/2.5/weather?lat=13.028900&lon=80.239487&appid=6fb944ff2c125a9135bad967a9e20a1a";

// const data = request({ url: url, json: true }, (error, response) => {

//   const result = `It feels like ${response.body.main.feels_like} in ${response.body.name};`;
//   console.log(result);

// });

// const geocode = (address, callback) => {
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?lat=13.028900&lon=80.239487&appid=6fb944ff2c125a9135bad967a9e20a1a";

//   request({ url: url, json: true }, (error, response) => {
//     if (response) {
//       callback(response.body);
//     } else {
//       callback(error);
//     }
//   });
// };
// geocode("india", (error, data) => {
//   console.log(data);
// });

// object destructuring

const obj = {
  label: "TWS - Earphones",
  brand: "Boat",
  price: 1499,
  quality: "Good",
};

// const label = obj.label;
const { label, brand, price } = obj;

console.log("Brand :", brand);
console.log("label :", label);
console.log("price :", price);
