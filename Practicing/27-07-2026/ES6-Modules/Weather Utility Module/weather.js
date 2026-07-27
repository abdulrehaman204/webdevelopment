// Named Export
export function getTemperature(city) {
    return `${city}: 30°C`;
}

// Named Export
export function getHumidity(city) {
    return `${city}: 70%`;
}

// Named Export
export function getWindSpeed(city) {
    return `${city}: 15 km/h`;
}

// Default Export
export default function WeatherReport(city) {
    return `
Weather Report
--------------
City: ${city}
Temperature: 30°C
Humidity: 70%
Wind Speed: 15 km/h
`;
}

