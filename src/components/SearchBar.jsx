import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <input
        className="flex-1 p-3 rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search for a city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 rounded-xl hover:bg-blue-600 transition">
        Search
      </button>
    </form>
  );
}
