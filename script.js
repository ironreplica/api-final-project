let weatherContainer = document.querySelector("div.weather-info-container");
let temp;

let weatherApiKey = "efb559401f7c8ecab975ec7c30e877ba";
let newsApiKey = "19dd6a7af13a4a48b6158b5a51937e8f";

// xyfBUQGLxvAwIXiR4j748TCw5B2EoaDc

let lat = 40.640209;
let lon = -112.304764;

let WeatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`;
let NewsURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`;
fetch(WeatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    day = jsObject;
    for (var i = 1; i <= 40; i++) {
      if (i % 8 == 0) {
        let card = document.createElement("div");

        let date = document.createElement("h1");
        let hour = document.createElement("h1");

        let temp = document.createElement("h1");

        let weather = document.createElement("p");

        card.className = "weather";

        date.className = "date";
        temp.className = "temp";

        var curDate = day.list[i - 1].dt_txt.replace(/^...../, "");
        var dateHourArr = curDate.split(" ");

        /* Convert to string, add date and temps, if more then 12, add pm if not am */
        function tempHour() {
          if (dateHourArr[1].slice(0, 2) < 12) {
            return dateHourArr[1].slice(0, 2);
          } else if (dateHourArr[1].slice(0, 2) > 12) {
            return dateHourArr[1].slice(0, 2) - 12 + "PM";
          } else {
            return 12;
          }
        }
        date.textContent = dateHourArr[0];
        hour.textContent = tempHour();
        temp.textContent = Math.round(day.list[i - 1].main.temp) + "\u00B0F";

        card.appendChild(date);
        card.appendChild(hour);
        card.appendChild(temp);
        card.appendChild(weather);

        document.querySelector("div.weather-info-container").appendChild(card);
      }
    }
  });
fetch(NewsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    news = jsObject;
    /* Get top 3 articles */
    for (var i = 0; i < 3; i++) {
      newsContent = news.articles[i];

      let card = document.createElement("div");
      let newsTitle = document.createElement("h1");
      let newsDescription = document.createElement("p");
      let source = document.createElement("a");

      newsTitle.textContent = newsContent.title;
      newsDescription.textContent = newsContent.description;
      source.textContent = "Source";
      source.href = newsContent.url;

      card.classList.add("news");

      card.appendChild(newsTitle);
      card.appendChild(newsDescription);
      card.appendChild(source);

      document.querySelector("div.news-container").appendChild(card);
    }
  });
