import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./app/App.jsx";
import { WeatherProvider } from "./features/weather/context/WeatherContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </StrictMode>,
)
