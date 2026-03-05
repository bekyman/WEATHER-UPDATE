import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function WeatherMap({ lat, lon }) {
  return (
    <div className="h-64 rounded-2xl overflow-hidden mt-6">
      <MapContainer
        center={[lat, lon]}
        zoom={7}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <TileLayer
          url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${import.meta.env.VITE_WEATHER_API_KEY}`}
        />
      </MapContainer>
    </div>
  );
}
