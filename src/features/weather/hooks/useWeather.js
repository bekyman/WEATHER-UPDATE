import { useState, useEffect } from "react";
import { getWeatherByCoords } from "../api/weatherApi";

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const fetchWeather = async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherByCoords(lat, lon);
      setWeatherData(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    
    const defaultLat = 9.03; 
    const defaultLon = 38.74; 
    fetchWeather(defaultLat, defaultLon);
  }, []);

  return { weatherData, loading, error, fetchWeather };
};
