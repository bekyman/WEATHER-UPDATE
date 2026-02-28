import React, { useState } from 'react';
import { useWeather } from '../context/WeatherContext';

const LocationButton = () => {
  const { fetchWeather, loading } = useWeather();
  const [locating, setLocating] = useState(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLocating(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        fetchWeather({ lat: latitude, lon: longitude });
        setLocating(false);
      },
      (error) => {
        setLocating(false);
        console.error("Error fetching location:", error);
        alert("Unable to retrieve your location. Please check permissions.");
      }
    );
  };

  return (
    <button
      onClick={handleGetLocation}
      disabled={loading || locating}
      className="location-btn flex items-center justify-center p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
      title="Use Current Location"
      aria-label="Use Current Location"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
      <span className="ml-2 text-sm font-medium">
        {locating ? "Locating..." : "Use My Location"}
      </span>
    </button>
  );
};

export default LocationButton;

