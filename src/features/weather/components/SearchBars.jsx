import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input 
        type="text" 
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Search</button>
    </form>
  );
};
export default SearchBar;
