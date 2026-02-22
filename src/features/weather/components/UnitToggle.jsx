
import React from 'react';
import { useWeather } from '../context/WeatherContext';

const UnitToggle = () => {
  const { unit, toggleUnit } = useWeather();

  return (
    <div className="unit-toggle">
      <span>°C</span>
      <label className="switch">
        <input 
          type="checkbox" 
          onChange={toggleUnit} 
          checked={unit === 'imperial'} 
        />
        <span className="slider round"></span>
      </label>
      <span>°F</span>
    </div>
  );
};

export default UnitToggle;
