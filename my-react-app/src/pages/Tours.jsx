import { useState } from "react";
import tours from "../data/tours";

function Tours() {
  const [search, setSearch] = useState("");

  const filtered = tours.filter(t =>
    t.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🌍 Все туры</h1>
      <input
        type="text"
        placeholder="Поиск по стране..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((tour, i) => (
          <div key={i} className="border rounded p-2 shadow">
            <img src={tour.img} alt={tour.country} className="w-full h-40 object-cover rounded" />
            <h3 className="font-bold text-lg mt-2">{tour.country}</h3>
            <p className="text-gray-600">{tour.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;
