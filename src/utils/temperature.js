export const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

export const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

