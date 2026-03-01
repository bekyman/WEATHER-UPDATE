import React, { useState } from "react";
import { WeatherProvider, useWeather } from "../features/weather/context/WeatherContext";
import WeatherCard from "../features/weather/components/WeatherCard";

const SearchForm = () => {
  const [city, setCity] = useState("");
  const { fetchWeather } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

const AppContent = () => (
  <div className="app">
    <h1>Weather Dashboard</h1>
    <SearchForm />
    <WeatherCard />
  </div>
);

function App() {
  return (
    <WeatherProvider>
      <AppContent />
    </WeatherProvider>
  );
}

export default App;
