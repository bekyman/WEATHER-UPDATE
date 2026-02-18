import { createContext, useContext, useState } from 'react';

const TemperatureContext = createContext();

export const TemperatureProvider = ({ children }) => {
  const [unit, setUnit] = useState('metric'); // 'metric' (C) or 'imperial' (F)

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <TemperatureContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </TemperatureContext.Provider>
  );
};

export const useTemperature = () => useContext(TemperatureContext);

