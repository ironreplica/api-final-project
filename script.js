let weatherContainer = document.querySelector("div.weather-info-container");
let temp;
let URL =
  "https://api.open-meteo.com/v1/gfs?latitude=52.52&longitude=13.41&hourly=temperature_2m";
fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    temp = jsObject.current_weather;
    // weatherContainer.textContent = temp;
  });
