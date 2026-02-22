const STORAGE_KEY = 'recent_weather_searches';
const MAX_ITEMS = 5;

export const saveSearch = (cityName) => {
  const existing = getRecentSearches();
  
  
  const filtered = existing.filter(item => item.toLowerCase() !== cityName.toLowerCase());
  
  
  const updated = [cityName, ...filtered].slice(0, MAX_ITEMS);
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const getRecentSearches = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const clearHistory = () => {
  localStorage.removeItem(STORAGE_KEY);
};
