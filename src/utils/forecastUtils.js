export function processForecast(data) {
  const grouped = {};

  data.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!grouped[date]) grouped[date] = [];

    grouped[date].push(item);
  });

  const days = Object.values(grouped).slice(0, 5);

  const forecast = days.map((items) => {
    const temps = items.map((i) => i.main.temp);
    const pops = items.map((i) => i.pop ?? 0);

    const rep = items.find((i) =>
      i.dt_txt.includes("12:00:00")
    );

    return {
      day: new Date(rep.dt * 1000).toLocaleDateString(
        "en-US",
        { weekday: "short" }
      ),
      temp_max: Math.max(...temps),
      temp_min: Math.min(...temps),
      pop: Math.max(...pops),
      icon: rep.weather[0].icon
    };
  });

  const temps = forecast.flatMap((d) => [
    d.temp_max,
    d.temp_min
  ]);

  const globalMax = Math.max(...temps);
  const globalMin = Math.min(...temps);

  return forecast.map((f) => ({
    ...f,
    globalMax,
    globalMin
  }));
}
