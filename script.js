let weatherContainer = document.querySelector("div.weather-info-container");
let temp;
let apiKey = "efb559401f7c8ecab975ec7c30e877ba";

let lat = 40.640209;
let lon = -112.304764;

let URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    day = jsObject;

    for (var i = 1; i <= 40; i++) {
      if (i % 8 == 0) {
        console.log(i - 1);
        console.log(day.list[i - 1]);

        let card = document.createElement("div");

        let date = document.createElement("h1");
        let temp = document.createElement("h1");

        let weather = document.createElement("p");

        card.className = "weather";

        date.className = "date";
        temp.className = "temp";

        var curDate = day.list[i - 1].dt_txt.replace(/^...../, "");
        var dateHourArr = curDate.split(" ");

        // convert to string, add date and temps, if more then 12, add pm if not am
        function tempHour() {
          if (dateHourArr[1].slice(0, 2) < 12) {
            return dateHourArr[1].slice(0, 2);
          } else if (dateHourArr[1].slice(0, 2) > 12) {
            return (dateHourArr[1].slice(0, 2) - 12) + "PM";
          } else {
            return 12;
          }
        }

        if (dateHourArr[1].slice(0, 2) < 12) {
        } else {
        }

        date.textContent = tempHour();

        card.appendChild(date);
        card.appendChild(temp);
        card.appendChild(weather);

        document.querySelector("div.weather-info-container").appendChild(card);
      }
    }
    // weatherContainer.textContent = temp;
  });
