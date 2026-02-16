export default function ForecastList({ forecast }) {
  return (
    <div className="flex gap-4 overflow-x-auto mt-6">
      {forecast.map((item, i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow min-w-[120px] text-center">
          <p className="font-semibold">
            {new Date(item.dt_txt).toLocaleDateString()}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            className="mx-auto"
          />
          <p>{Math.round(item.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
}
