var apiKey = "afd682401c0cee2cf220ad5a92b3a135";
var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";
var fiveDay = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}";

var lon = -94.04
var lat = 33.44
var city

function oneCallApi() {

    $.ajax({
      url: oneCall,
      method: "GET",
    }).then(function (response) {
      console.log(response)
    }