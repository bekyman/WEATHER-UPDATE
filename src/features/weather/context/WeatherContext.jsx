import React, { createContext, useState, useContext, useCallback } from 'react';
import { getWeatherData } from '../api/weatherApi'; // Assuming this is your API helper

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch weather logic
  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherData(city, unit);
      setWeather(data.current);
      setForecast(data.forecast);
    } catch (err) {
      setError("Could not find that city. Please try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, [unit]);

  // Toggle between Celsius and Fahrenheit
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
    // Optional: Re-fetch weather here if your API requires a unit param
  };

  const value = {
    weather,
    forecast,
    unit,
    loading,
    error,
    fetchWeather,
    toggleUnit,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook for easy access to the context
export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};

