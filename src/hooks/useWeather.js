import { useState } from 'react';
import { fetchWeatherData, fetchForecastData } from '../api/weatherServices';

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const weatherData = await fetchWeatherData(city);
      setWeather(weatherData);
      
      const forecastData = await fetchForecastData(weatherData.coord.lat, weatherData.coord.lon);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, getWeather };
};
