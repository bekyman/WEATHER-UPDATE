import React from 'react';
import { useWeather } from '../context/WeatherContext';

const WeatherCard = () => {
  const { weather, unit, loading } = useWeather();

 
  if (loading) return <div className="loader">Gathering the clouds...</div>;
  if (!weather) return <div className="welcome-msg">Search for a city to see the weather!</div>;


  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  
  
  const unitLabel = unit === 'metric' ? '°C' : '°F';

  return (
    <div className="weather-card">
      <div className="card-header">
        <h2>{weather.name}, {weather.sys.country}</h2>
        <p>{new Date().toLocaleDateString()}</p>
      </div>

      <div className="card-body">
        <div className="temp-section">
          <img src={iconUrl} alt={weather.weather[0].description} />
          <span className="temperature">
            {Math.round(weather.main.temp)}{unitLabel}
          </span>
        </div>
        
        <p className="description">{weather.weather[0].description}</p>
      </div>

      <div className="card-footer">
        <div className="info-item">
          <span>Humidity</span>
          <strong>{weather.main.humidity}%</strong>
        </div>
        <div className="info-item">
          <span>Wind</span>
          <strong>{weather.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</strong>
        </div>
        <div className="info-item">
          <span>Feels Like</span>
          <strong>{Math.round(weather.main.feels_like)}{unitLabel}</strong>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
