
var part = "minutely,hourly";
var apiKey = "afd682401c0cee2cf220ad5a92b3a135";
var saveBtn = document.querySelector(".saveBtn");

saveBtn.addEventListener("click", function () {
  var cityName = document.querySelector(".city").value;
  
  console.log(cityName);
  gettingCurrentWeather(cityName);
  localStorage.setItem(cityName);  
});

var weather = document.querySelector(".currentWeather");

var gettingCurrentWeather = function (city) {
  var currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  fetch(currentWeather).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        var tempTag = document.createElement("p");
        tempTag.textContent = "Temperature: " + data.main.temp;
        var humidityTag = document.createElement("p");
        humidityTag.textContent = "Humidity: " + data.main.humidity + "%";
        var windSpeedTag = document.createElement("p");
        windSpeedTag.textContent = "Wind Speed: " + data.wind.speed + " MPH";
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        weather.append(tempTag, humidityTag, windSpeedTag);
        oneCall(lat, lon);
      });
    } else {
      alert(`Error: ${response.statusText}`);
    }
  });
};

var oneCall = function (lat, lon) {
  var oneCallAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}&units=imperial`;
  fetch(oneCallAPI).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {

        var uvIndexTag = document.createElement("p");
        uvIndexTag.textContent = "UV Index: " + data.current.uvi 
        weather.append(uvIndexTag)
        var slicedArray = data.daily.slice(0,5);

        var forecast = document.querySelector(".fiveDayForecast");

        for (var i = 0; i < slicedArray.length; i++) {
           var element = slicedArray[i];
           console.log(element)
          var card = document.createElement("div");
          card.setAttribute("class", "card");
          var cardBody = document.createElement("div");
          cardBody.setAttribute("class", "card-body")
          

          var tempTag = document.createElement("p");
          tempTag.textContent = "Temperature: " + element.temp.max;
          var windSpeedTag = document.createElement("p");
          windSpeedTag.textContent = "Wind Speed: " + element.wind_speed + " MPH";
          var humidityTag = document.createElement("p");
          humidityTag.textContent = "Humidity: " + element.humidity + "%";

          cardBody.append(tempTag, windSpeedTag, humidityTag)
          card.append(cardBody)
          forecast.append(card);
        }

      });
    } else {
      alert(`Error: ${response.statusText}`);
    }
  });


};
