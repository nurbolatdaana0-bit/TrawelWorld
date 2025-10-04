import { useState } from "react";
import { Link } from "react-router-dom";

// временные данные (можно вынести в отдельный hotels.js)
const hotels = [
  {
    id: 1,
    title: "Domki Wierszyki Shelters",
    location: "Польша, Закопане",
    rating: 9.6,
    reviews: 86,
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/123.jpg"
  },
  {
    id: 2,
    title: "Ranczo w Dolinie",
    location: "Польша, Kiszkowo",
    rating: 9.6,
    reviews: 140,
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/234.jpg"
  },
  {
    id: 3,
    title: "Tiny House Dreischwesternherz",
    location: "Германия, Трир",
    rating: 9.6,
    reviews: 136,
    img: "https://cf.bstatic.com/xdata/images/hotel/square600/345.jpg"
  }
];

export default function HotelsPage() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("Все");
  const [page, setPage] = useState(1);

  const hotelsPerPage = 4;

  // фильтрация
  const filteredHotels = hotels
    .filter(hotel =>
      hotel.title.toLowerCase().includes(query.toLowerCase())
    )
    .filter(hotel =>
      country === "Все" ? true : hotel.location.includes(country)
    );

  // пагинация
  const startIndex = (page - 1) * hotelsPerPage;
  const endIndex = startIndex + hotelsPerPage;
  const currentHotels = filteredHotels.slice(startIndex, endIndex);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🏨 Отели</h1>

      {/* поиск */}
      <input
        type="text"
        placeholder="Поиск отеля..."
        className="border px-3 py-2 rounded mb-4 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* фильтр по стране */}
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="border px-3 py-2 rounded mb-6"
      >
        <option value="Все">Все страны</option>
        <option value="Польша">Польша</option>
        <option value="Германия">Германия</option>
      </select>

      {/* список отелей */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentHotels.map((hotel) => (
          <Link
            to={`/hotels/${hotel.id}`}
            key={hotel.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={hotel.img} alt={hotel.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{hotel.title}</h2>
              <p className="text-sm text-gray-600">{hotel.location}</p>
              <p className="mt-2 font-medium">⭐ {hotel.rating} ({hotel.reviews} отзывов)</p>
            </div>
          </Link>
        ))}
      </div>

      {/* пагинация */}
      <div className="flex space-x-2 mt-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Назад
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={endIndex >= filteredHotels.length}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Далее
        </button>
      </div>
    </div>
  );
}
