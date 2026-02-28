import React from 'react';
import { useWeather } from '../context/WeatherContext';

const RefreshButton = () => {

  const { weather, loading, fetchWeather } = useWeather();

  
  if (!weather || !weather.name) return null;

  const handleRefresh = () => {
   
    fetchWeather(weather.name);
  };

  return (
    <button 
      onClick={handleRefresh} 
      disabled={loading}
      className="refresh-btn bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
      aria-label="Refresh weather data"
    >
      
      {loading ? (
        <span>Refreshing...</span>
      ) : (
        <>
          <span className="text-xl">↻</span> Refresh
        </>
      )}
    </button>
  );
};

export default RefreshButton;

