const request = require("request");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6fb944ff2c125a9135bad967a9e20a1a";

const data = request({ url: url }, (error, response) => {
  const result = JSON.parse(response.body);

  try {
    console.log(result.weather);
  } catch {
    console.log(error);
  }
});
