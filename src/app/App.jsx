// src/main.jsx
import { WeatherProvider } from './features/weather/context/WeatherContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <WeatherProvider>
    <App />
  </WeatherProvider>
);

