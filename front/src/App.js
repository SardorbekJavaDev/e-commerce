import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

import "./App.css";

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    const fetchWeather = async (city) => {
        try {
            const response = await axios.get(`http://localhost:8080/weather?city=${city}`);
            setWeatherData(response.data);
            console.log(response.data);
            
            setError(null);
        } catch (err) {
            setError("City not found or API error.");
            // setWeatherData(null);
        }
    };

    return (
        <div className="app">
            <h1>Weather App</h1>
            <SearchBar onSearch={fetchWeather} />
            {error && <p className="error">{error}</p>}
            <WeatherCard weatherData={weatherData} error={error} />
        </div>
    );
};

export default App;
