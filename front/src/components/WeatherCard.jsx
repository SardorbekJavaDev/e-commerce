// import React from "react";

// const WeatherCard = ({ weatherData, error }) => {
//     if (error) {
//         return <div className="error-message">{error}</div>;
//     }

//     if (!weatherData || !weatherData.main || !weatherData.weather) {
//         return <p>No data to display</p>;
//     }

//     const { name, main, weather } = weatherData;
//     return (
//         <div className="weather-card">
//             <h2>{name}</h2>
//             <h3>{Math.round(main.temp)}°C</h3>
//             <p>{weather[0].description}</p>
//             <p>Feels like: {Math.round(main.feels_like)}°C</p>
//         </div>
//     );
// };

// export default WeatherCard;

// const WeatherCard = ({ weatherData, error }) => {
//     if (error) {
//         return <div className="error-message">{error}</div>;
//     }

//     if (!weatherData) {
//         return <p>No data to display</p>;
//     }

//     const name = weatherData.name || "Unknown City";
//     const temp = weatherData.main?.temp ? Math.round(weatherData.main.temp) : "N/A";
//     const feelsLike = weatherData.main?.feels_like
//         ? Math.round(weatherData.main.feels_like)
//         : "N/A";
//     const description = weatherData.weather?.[0]?.description || "No description available";

//     return (
//         <div className="weather-card">
//             <h2>{name}</h2>
//             <h3>{temp}°C</h3>
//             <p>{description}</p>
//             <p>Feels like: {feelsLike}°C</p>
//         </div>
//     );
// };

// export default WeatherCard;
import React from "react";

const WeatherCard = ({ weatherData }) => {
    // Safely access weather data or provide defaults
    const name = weatherData?.name || "Unknown City";
    const temp = weatherData?.main?.temp ? Math.round(weatherData.main.temp) : "N/A";
    const feelsLike = weatherData?.main?.feels_like
        ? Math.round(weatherData.main.feels_like)
        : "N/A";
    const minTemp = weatherData?.main?.temp_min
        ? Math.round(weatherData.main.temp_min)
        : "N/A";
    const maxTemp = weatherData?.main?.temp_max
        ? Math.round(weatherData.main.temp_max)
        : "N/A";
    const pressure = weatherData?.main?.pressure || "N/A";
    const humidity = weatherData?.main?.humidity || "N/A";
    const description =
        weatherData?.weather?.[0]?.description || "No description available";
    const windSpeed = weatherData?.wind?.speed || "N/A";
    const windDeg = weatherData?.wind?.deg || "N/A";
    const visibility = weatherData?.visibility
        ? `${weatherData.visibility / 1000} km`
        : "N/A";
    const clouds = weatherData?.clouds?.all || "N/A";
    const sunrise = weatherData?.sys?.sunrise
        ? new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()
        : "N/A";
    const sunset = weatherData?.sys?.sunset
        ? new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()
        : "N/A";
    const country = weatherData?.sys?.country || "Unknown Country";

    return (
        <div className={`weather-card`}>
            <h2>🌍 Weather in {name}, {country}</h2>
            <p><strong>🌡️ Temperature:</strong> {temp}°C</p>
            <p><strong>🤔 Feels Like:</strong> {feelsLike}°C</p>
            <p><strong>🔽 Min Temp:</strong> {minTemp}°C</p>
            <p><strong>🔼 Max Temp:</strong> {maxTemp}°C</p>
            <p><strong>📝 Condition:</strong> {description}</p>
            <p><strong>💨 Wind:</strong> {windSpeed} m/s, {windDeg}°</p>
            <p><strong>🌫️ Visibility:</strong> {visibility}</p>
            <p><strong>☁️ Clouds:</strong> {clouds}%</p>
            <p><strong>🧭 Pressure:</strong> {pressure} hPa</p>
            <p><strong>💧 Humidity:</strong> {humidity}%</p>
            <p><strong>🌅 Sunrise:</strong> {sunrise}</p>
            <p><strong>🌇 Sunset:</strong> {sunset}</p>
        </div>
    );
};

export default WeatherCard;
