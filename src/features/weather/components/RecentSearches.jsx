import React from 'react';
import { useWeather } from '../context/WeatherContext';

const RecentSearches = () => {
  const { history, fetchWeather } = useWeather();

  if (history.length === 0) return null;

  return (
    <div className="recent-searches">
      <span>Recent: </span>
      {history.map((city) => (
        <button 
          key={city} 
          onClick={() => fetchWeather(city)}
          className="history-chip"
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default RecentSearches;

