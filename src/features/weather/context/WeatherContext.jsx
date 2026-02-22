import { saveSearch, getRecentSearches } from '../../../utils/searchStorage';


const [history, setHistory] = useState(getRecentSearches());

const fetchWeather = useCallback(async (city) => {
  setLoading(true);
  setError(null);
  try {
    const data = await getWeatherData(city, unit);
    setWeather(data.current);
    setForecast(data.forecast);
    setCurrentCity(city);
    
    
    const updatedHistory = saveSearch(city);
    setHistory(updatedHistory); 
    
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}, [unit]);
