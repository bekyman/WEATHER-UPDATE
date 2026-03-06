export function processHourly(data) {
  return data.list.slice(0, 8).map((item) => ({
    time:
      new Date(item.dt * 1000).getHours() + ":00",
    temp: item.main.temp
  }));
}
