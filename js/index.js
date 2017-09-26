// Location Data

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    weathAPI =
      "https://fcc-weather-api.glitch.me/api/current?lon=" +
      long +
      "&lat=" +
      lat;

    //FCC Weather API
    $.getJSON(weathAPI, function(json) {
      var weathData = json;

      //HTML JSON Fills
      document.getElementById("current-temp-cels").innerHTML = Math.round(weathData.main.temp) + "°C";
      document.getElementById("current-temp-far").innerHTML = Math.round(weathData.main.temp * 9 / 5 + 32) + "°F";
      document.getElementById("location-bar").innerHTML = weathData.name;
      document.getElementById("current-cond-text").innerHTML = weathData.weather[0].main;
      document.getElementById("current-cond-icon").innerHTML = "<img src = '" + weathData.weather[0].icon + "' >";

      //Temperature toggle
      $("#tempToggle").on("click", function() {
        $(".temperatureToggle").toggle();
      });
    });
  });
}