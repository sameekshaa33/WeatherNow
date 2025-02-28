const apikey = "4e23413344a439c6270f819a72c9756b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=hyderabad";

const searchbox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city) { // for fetching weather data
  const response = await fetch(apiUrl + `&appid=${apikey}`); // making API request
  var data = await response.json(); // process the response as JSON
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
  document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
}

// Event listener for the search button
searchBtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
  });

