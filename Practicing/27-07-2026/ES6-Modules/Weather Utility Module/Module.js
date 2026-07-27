import WeatherReport, {
    getTemperature,
    getHumidity,
    getWindSpeed
} from "./weather.js";

console.log(getTemperature("London"));
console.log(getHumidity("London"));
console.log(getWindSpeed("London"));

console.log(WeatherReport("London"));

