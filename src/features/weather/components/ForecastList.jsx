import React from 'react';
import { useWeather } from '../context/WeatherContext';

const ForecastList = () => {
  const { forecast, unit } = useWeather();

  if (!forecast || forecast.length === 0) return null;

 
  const dailyForecast = forecast.filter((item) => item.dt_txt.includes("12:00:00"));

  const unitLabel = unit === 'metric' ? '°C' : '°F';

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {dailyForecast.map((day) => (
          <div key={day.dt} className="forecast-item">
            <p className="day-name">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <img 
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
              alt={day.weather[0].description} 
            />
            <p className="forecast-temp">
              {Math.round(day.main.temp)}{unitLabel}
            </p>
            <p className="forecast-desc">{day.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
