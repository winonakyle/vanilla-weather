function refreshWeather(response) {
  let currentTempElement = document.querySelector("#current-temp");
  let temperature = response.data.temperature.current;
  let currentCityElement = document.querySelector("#current-city");

  currentCityElement.innerHTML = response.data.city;
  currentTempElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "8e3acea414f74ff0de5f0fboa8fbt362";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiURL).then(refreshWeather);
}

function submitSearchForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", submitSearchForm);

searchCity("Iron River");
