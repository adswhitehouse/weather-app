// Variables
let searchInput = document.querySelector(".jsSearchInput");
let searchButton = document.querySelector(".jsSearchButton");
let degrees = document.querySelector(".jsDegrees");
let City = document.querySelector(".jsLocation");
let humidityPercentage = document.querySelector(".humidityPercentage");
let windSpeedKmh = document.querySelector(".jsWindSpeedKmh");

// API Variables
let apiKey = "d80a61cfae818768935ffe00d05ace5a";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=&units=metric&q=london";

async function checkWeather() {
  let response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json()
  console.log(data)
}
checkWeather()
