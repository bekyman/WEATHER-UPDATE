export default function WeatherBackground({ condition }) {
  const backgrounds = {
    Clear: "bg-gradient-to-br from-yellow-300 to-blue-400",
    Clouds: "bg-gradient-to-br from-gray-300 to-gray-500",
    Rain: "bg-gradient-to-br from-blue-600 to-gray-700",
    Snow: "bg-gradient-to-br from-blue-100 to-white",
    Thunderstorm: "bg-gradient-to-br from-gray-700 to-black",
    Mist: "bg-gradient-to-br from-gray-200 to-gray-400"
  };

  const bg = backgrounds[condition] || backgrounds.Clear;

  return (
    <div
      className={`fixed inset-0 -z-10 transition-all duration-700 ${bg}`}
    />
  );
}
