const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    return {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      condition: data.weather[0].main
    };

  } catch (error) {
    throw error;
  }
}
