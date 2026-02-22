const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (city, unit = 'metric') => {
  if (!API_KEY) {
    console.error("API Key is missing! Check your .env file.");
    throw new Error("Configuration error. Please try again later.");
  }

  try {
    
    const currentResponse = await fetch(
      `${BASE_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}`
    );

    if (!currentResponse.ok) {
      
      if (currentResponse.status === 404) throw new Error("City not found.");
      throw new Error("Failed to fetch current weather.");
    }
    const currentData = await currentResponse.json();

    
    const forecastResponse = await fetch(
      `${BASE_URL}/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
    );

    if (!forecastResponse.ok) {
      throw new Error("Failed to fetch forecast data.");
    }
    const forecastData = await forecastResponse.json();

    
    return {
      current: currentData,
      forecast: forecastData.list, 
    };

  } catch (error) {
    console.error("Weather API Error:", error.message);
    throw error; 
  }
};

