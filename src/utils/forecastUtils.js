export function processForecast(data) {
  const grouped = {};

  data.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0]; 

    if (!grouped[date]) {
      grouped[date] = [];
    }

    grouped[date].push(item);
  });

  const days = Object.keys(grouped).slice(0, 5);

  return days.map((date) => {
    const items = grouped[date];

    const temps = items.map((i) => i.main.temp);
    const pops = items.map((i) => i.pop ?? 0);

    const rep = items[0];

    return {
      day: new Date(date).toLocaleDateString("en-US", {
        weekday: "short"
      }),
      temp_max: Math.max(...temps),
      temp_min: Math.min(...temps),
      pop: Math.max(...pops),
      icon: rep.weather[0].icon
    };
  });
}
