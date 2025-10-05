import React, { useState } from "react";

export default function Excursions() {
  const [booked, setBooked] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [activeCountry, setActiveCountry] = useState("Все страны");
  const [activeInfo, setActiveInfo] = useState(null);

  const excursions = [
    { id: 1, title: "Боровое", country: "Казахстан", price: "15 000 ₸", description: "Поездка к озёрам и горам Борового.", img: "https://pibig.info/uploads/posts/2022-11/1668736335_4-pibig-info-p-borovoe-oboi-4.jpg" },
    { id: 2, title: "Медео и Шымбулак", country: "Казахстан", price: "15 000 ₸", description: "Высокогорный каток и курорт.", img: "https://i.pinimg.com/originals/e0/b3/21/e0b321de627cb5f6187f12ac04eccdf2.jpg" },
    { id: 3, title: "Сафари в Кении", country: "Кения", price: "120 000 ₸", description: "Встреча с дикой природой.", img: "https://www.maasaimarakenyapark.com/wp-content/uploads/2019/08/Webp.net-compress-image-58.jpg" },
    { id: 4, title: "Великая Китайская стена", country: "Китай", price: "45 000 ₸", description: "Прогулка по Китаю.", img: "https://cdn.getyourguide.com/img/location/5457947d8d6b8.jpeg/99.jpg" },
    { id: 5, title: "Париж", country: "Франция", price: "200 000 ₸", description: "Эйфелева башня и прогулка по Сене.", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
    { id: 6, title: "Пирамиды Гизы", country: "Египет", price: "95 000 ₸", description: "Древние пирамиды и Сфинкс.", img: "https://cf4.ppt-online.org/files4/slide/g/G4bTBumtsxcNMniKzQPFVhJv7a0eDLjS9XAlpk/slide-6.jpg" },
    { id: 7, title: "Каппадокия", country: "Турция", price: "80 000 ₸", description: "Полет на воздушном шаре.", img: "https://irzabekovfazil.ru/img/43217943_1200.jpg" },
    { id: 8, title: "Рим и Колизей", country: "Италия", price: "150 000 ₸", description: "Древний Колизей и Вечный город.", img: "https://architectureguru.ru/wp-content/uploads/2019/11/coliseum-in-rome-1.jpg" },
    { id: 9, title: "Петроглифы", country: "Китай", price: "10 000 ₸", description: "Изучение древних наскальных рисунков.", img: "https://wildticketasia.com/uploads/posts/2021-12/1639211879_eshkiolmes-petroglyphs-01.jpg" },
    { id: 10, title: "Комбинированный тур", country: "Казахстан и Кыргызстан", price: "80 000 ₸", description: "Посещение нескольких стран за короткий срок.", img: "http://cooltour.kz/wp-content/uploads/2021/04/kaindy.png" },
    { id: 11, title: "Исторические города", country: "Иран", price: "80 000 ₸", description: "Туры по историческим городам Ирана.", img: "https://about-planet.ru/images/asia/strana/iran/iran1.jpg" },
    { id: 12, title: "Кемер и Мира", country: "Турция", price: "80 000 ₸", description: "Красивые пляжи и исторические места.", img: "https://cdn1.tophotels.ru/icache/hotel_photos/83/10003/25780/2742478_740x550.jpg" }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const handleBooking = (id) => {
    setBooked(prev => ({ ...prev, [id]: true }));
  };

  const countries = [
    "Все страны",
    "Избранное",
    "Казахстан",
    "Кения",
    "Китай",
    "Франция",
    "Египет",
    "Турция",
    "Италия",
    "Казахстан и Кыргызстан",
    "Иран"
  ];

  const filteredExcursions =
    activeCountry === "Все страны"
      ? excursions
      : activeCountry === "Избранное"
        ? excursions.filter(e => favorites.includes(e.id))
        : excursions.filter(e => e.country === activeCountry);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🌍 Экскурсии</h2>

      {/* Фильтр стран */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {countries.map((c, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCountry(c)}
            className={`px-3 py-1 rounded-full border transition ${
              activeCountry === c ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Список экскурсий */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredExcursions.map(exc => (
          <div
            key={exc.id}
            className="border rounded-lg shadow p-4 relative cursor-pointer hover:shadow-lg transition"
            onClick={() => setActiveInfo(activeInfo === exc.id ? null : exc.id)}
          >
            <img src={exc.img} alt={exc.title} className="w-full h-40 object-cover rounded-md mb-2" />
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{exc.title}</h3>
              <button
                onClick={(e) => { e.stopPropagation(); toggleFavorite(exc.id); }}
                className={favorites.includes(exc.id) ? "text-red-500" : "text-gray-400 hover:text-red-500"}
              >
                ❤️
              </button>
            </div>
            <p className="text-gray-500">{exc.country}</p>
            <p className="text-blue-600 font-bold">{exc.price}</p>

            <button
              onClick={(e) => { e.stopPropagation(); handleBooking(exc.id); }}
              disabled={booked[exc.id]}
              className={`mt-2 w-full py-1 rounded ${
                booked[exc.id] ? "bg-green-500 text-white" : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {booked[exc.id] ? "✅ Забронирован" : "Забронировать"}
            </button>

            {activeInfo === exc.id && (
              <div className="absolute inset-0 bg-white bg-opacity-95 p-4 border rounded-lg mt-2 z-50">
                <h4 className="font-bold">{exc.title}</h4>
                <p><strong>Страна:</strong> {exc.country}</p>
                <p><strong>Цена:</strong> {exc.price}</p>
                <p className="mt-1">{exc.description}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveInfo(null); }}
                  className="mt-2 text-sm text-red-500 hover:underline"
                >
                  Закрыть
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
