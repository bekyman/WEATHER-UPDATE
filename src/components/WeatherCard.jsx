export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="bg-white/90 rounded-3xl shadow-lg p-8 mt-6 text-center">
      <h2 className="text-3xl font-bold">{weather.city}</h2>

      <img
        src={weather.icon}
        alt={weather.condition}
        className="mx-auto w-28"
      />

      <p className="text-5xl font-semibold">{Math.round(weather.temperature)}°C</p>
      <p className="text-gray-600">{weather.condition}</p>

      <div className="flex justify-center gap-10 mt-6 text-lg">
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{weather.humidity}%</p>
        </div>

        <div>
          <p className="font-semibold">Wind</p>
          <p>{weather.wind} km/hr</p>
        </div>
      </div>
    </div>
  );
}
