 import React, { createContext, useContext, useState } from "react";


const WeatherContext = createContext(null);


export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("metric"); 


  const fetchWeather = async (city) => {
  if (!city) return;
  setLoading(true);
  try {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    // Get one forecast per day (every 8th item = 24h)
    const dailyForecast = data.list.filter((item, index) => index % 8 === 0);

    setWeather({
      city: data.city,
      list: dailyForecast
    });

  } catch (err) {
    console.error(err);
    setWeather(null);
  } finally {
    setLoading(false);
  }
};

  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  return (
    <WeatherContext.Provider
      value={{
        weather,
        loading,
        unit,
        fetchWeather,
        toggleUnit,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useWeather must be inside WeatherProvider");
  return context;
};
