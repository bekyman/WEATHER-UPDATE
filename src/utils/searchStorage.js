const STORAGE_KEY = 'recent_searches';

export const getRecentSearches = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addRecentSearch = (city) => {
  const searches = getRecentSearches();
  // Avoid duplicates and limit to 5
  const updated = [city, ...searches.filter(s => s !== city)].slice(0, 5);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

