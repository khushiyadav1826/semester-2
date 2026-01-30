const seacrchBtn = document.getElementById("search");
const input = document.querySelector("input");
// const temperatureEl = document.querySelector("temperature");
// const locationEl = document.querySelector("location");
// const timeEl = document.querySelector("time");
// const dayEl = document.querySelector("day");
// const dateEl = document.querySelector("date");
// const conditionEl = document.querySelector("condition");
// const imgEl = document.querySelector("img");


searchBtn.addEventListener("click", () => {
  const city = input.value.trim();
  if (city === "") return;
  getWeather(city);
});