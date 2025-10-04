// src/pages/Excursions.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Excursions() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const excursions = [
    {
      id: 1,
      title: "Экскурсия в Боровое",
      country: "Казахстан",
      price: "15 000 ₸",
      img: "https://about-planet.ru/images/kazakhstan/borovoe/borovoe1.jpg",
      description: "Поездка к живописным озёрам и горам Борового.",
    },
    {
      id: 2,
      title: "Тур по Великой Китайской стене",
      country: "Китай",
      price: "45 000 ₸",
      img: "https://about-planet.ru/images/asia/velikaya-stena.jpg",
      description: "Незабываемая прогулка по знаменитой достопримечательности Китая.",
    },
    {
      id: 3,
      title: "Сафари в Кении",
      country: "Кения",
      price: "120 000 ₸",
      img: "https://www.maasaimarakenyapark.com/wp-content/uploads/2019/08/Webp.net-compress-image-58.jpg",
      description: "Встреча с дикой природой в национальном парке Масаи-Мара.",
    },
  ];

  // фильтрация по поиску
  const filtered = excursions.filter(
    (exc) =>
      exc.title.toLowerCase().includes(search.toLowerCase()) ||
      exc.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">🗺️ Популярные экскурсии</h2>

      {/* Поиск */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Поиск по экскурсиям..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Карточки экскурсий */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((excursion) => (
          <div
            key={excursion.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={excursion.img}
              alt={excursion.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{excursion.title}</h3>
              <p className="text-gray-600">{excursion.country}</p>
              <p className="mt-2 text-sm">{excursion.description}</p>
              <p className="mt-2 font-bold text-orange-600">{excursion.price}</p>

              {/* Кнопка бронирования */}
              <button
                onClick={() => navigate(`/booking/${excursion.id}`, { state: excursion })}
                className="mt-3 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Забронировать
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Если ничего не найдено */}
      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-6">Экскурсий не найдено 😢</p>
      )}
    </div>
  );
}

export default Excursions;
