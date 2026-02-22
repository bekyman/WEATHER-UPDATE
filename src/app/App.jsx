import React, { useEffect } from 'react'; 
import SearchBar from '../components/SearchBar';
import WeatherCard from '../features/weather/components/WeatherCard';
import ForecastList from '../features/weather/components/ForecastList';
import UnitToggle from '../features/weather/components/UnitToggle'; 


import { useGeolocation } from '../hooks/useGeolocation'; 
import { useWeather } from '../features/weather/hooks/useWeather';

function App() {
  
  const { getPosition, coords } = useGeolocation();
  const { fetchWeatherByCoords } = useWeather(); 

  useEffect(() => {
    getPosition(); 
  }, [getPosition]); 

  useEffect(() => {
    if (coords) {
      fetchWeatherByCoords(coords.lat, coords.lon);
    }
  }, [coords, fetchWeatherByCoords]);

  return (
    <div className="app-container">
      <header>
        <h1>Weather Dashboard</h1>
        <UnitToggle />
      </header>
      
      <main>
        <SearchBar />
        <WeatherCard />
        <ForecastList />
      </main>
    </div>
  );
} 

export default App;
