import SearchBar from '../components/SearchBar';
import WeatherCard from '../features/weather/components/WeatherCard';
import ForecastList from '../features/weather/components/ForecastList';
import UnitToggle from '../features/weather/components/UnitToggle';

function App() {
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
