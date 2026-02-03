const searchBtn = document.querySelector("#search");
const searchInput = document.querySelector("input");


const temperatureEl = document.querySelector(".temperature");
const locationEl = document.querySelector(".location");
const timeEl = document.querySelector(".time");
const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");
const conditionEl = document.querySelector(".condition");
const imgEl = document.querySelector("img");



searchBtn.addEventListener("click",() => {
// alert ("I was clicked")
const city = searchInput.value;
if (city ==="") return;

fetch(`https://api.weatherapi.com/v1/current.json?key=2576266e8c654f54af844641260302&q=${city}&aqi=no`)
.then(response => response.json())
.then(data => {

      const filteredWeatherData = {
        cityName: data.location.name,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        icon: "https:" + data.current.condition.icon,
        localTime: new Date(data.location.localtime)
      };
      
 updateUI(filteredWeatherData);
    })
    .catch(() => {
      alert("City not found");
    });

  searchInput.value = "";
});

function updateUI(weather) {
  temperatureEl.innerText = weather.temperature + "°C";
  locationEl.innerText = weather.cityName;
  conditionEl.innerText = weather.condition;
  imgEl.src = weather.icon;

  timeEl.innerText = weather.localTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  dayEl.innerText = weather.localTime.toLocaleDateString("en-US", {
    weekday: "long"
  });

  dateEl.innerText = weather.localTime.toLocaleDateString();
}