const apikey = "4e23413344a439c6270f819a72c9756b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon")

async function checkWeather(city) { // for fetching weather data
  const response = await fetch(apiUrl + city + `&appid=${apikey}`); // dynamically add city to the URL
  

  // Handling case if the city is not found (invalid city)
  if (response.status==404) {
    document.querySelector('.error').style.display="block";
    document.querySelector('.weather').style.display="none";
  } else {
    var data = await response.json(); // process the response as JSON
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main=="Clouds"){
      weathericon.src="images/clouds.png";
    }    
    else if(data.weather[0].main=="Clear"){
      weathericon.src="images/clear.png";
    }  
    else if(data.weather[0].main=="Rain"){
      weathericon.src="images/rain.png";
    }  
    else if(data.weather[0].main=="Drizzle"){
      weathericon.src="images/drizzle.png";
    }  
    else if(data.weather[0].main=="Mist"){
      weathericon.src="images/mist.png";
    }  

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
 

  }
}

// Event listener for the search button
searchBtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});


