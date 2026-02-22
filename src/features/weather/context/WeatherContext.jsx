const [currentCity, setCurrentCity] = useState(""); 

const fetchWeather = useCallback(async (city) => {
  setLoading(true);
  setError(null);
  try {
    const data = await getWeatherData(city, unit);
    setWeather(data.current);
    setForecast(data.forecast);
    setCurrentCity(city); 
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}, [unit]);


useEffect(() => {
  if (currentCity) {
    fetchWeather(currentCity);
  }
}, [unit]); 
