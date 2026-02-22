export const getWeatherByCoords = async (lat, lon, unit = 'metric') => {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`;
  
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to get weather for your location.");
  return await response.json();
};
