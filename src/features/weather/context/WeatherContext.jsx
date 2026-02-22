import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [recentSearches, setRecentSearches] = useState([]);

  const updateWeather = (data) => setWeatherData(data);
  const updateForecast = (data) => setForecastData(data);

  const addRecentSearch = (city) => {
    setRecentSearches((prev) => {
      const filtered = prev.filter((c) => c !== city);
      return [city, ...filtered].slice(0, 5);
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        forecastData,
        unit,
        recentSearches,
        updateWeather,
        updateForecast,
        setUnit,
        addRecentSearch
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
