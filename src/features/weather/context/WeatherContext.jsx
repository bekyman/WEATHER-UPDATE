import React, { createContext, useContext, useState } from "react";
export default function WeatherCard() {
  const { weather, loading, unit } = useWeather();

  if (loading) return <div>Loading forecast...</div>;
  if (!weather) return <div>Search for a city to see 5-day forecast.</div>;

  const unitLabel = unit === "metric" ? "°C" : "°F";

  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">
        {weather.city?.name}, {weather.city?.country}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {weather.list?.map((day, index) => (
          <div key={index} className="border p-3 rounded text-center">
            <p className="font-medium">
              {new Date(day.dt * 1000).toLocaleDateString()}
            </p>

            <p className="text-lg font-bold">
              {Math.round(day.main?.temp)}{unitLabel}
            </p>

            <p className="text-sm">
              {day.weather?.[0]?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
