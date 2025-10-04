import React from "react";

const excursions = [
  {
    id: 1,
    title: "Экскурсия в Боровое",
    country: "Казахстан",
    price: "15 000 ₸",
    img: "https://about-planet.ru/images/kazakhstan/borovoe/borovoe1.jpg",
    description: "Поездка к живописным озёрам и горам Борового."
  },
  {
    id: 2,
    title: "Тур по Великой Китайской стене",
    country: "Китай",
    price: "45 000 ₸",
    img: "https://about-planet.ru/images/asia/velikaya-stena.jpg",
    description: "Незабываемая прогулка по знаменитой достопримечательности Китая."
  },
  {
    id: 3,
    title: "Сафари в Кении",
    country: "Кения",
    price: "120 000 ₸",
    img: "https://www.maasaimarakenyapark.com/wp-content/uploads/2019/08/Webp.net-compress-image-58.jpg",
    description: "Встреча с дикой природой в национальном парке Масаи-Мара."
  }
];

function Excursions() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Экскурсии</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {excursions.map((excursion) => (
          <div key={excursion.id} className="border rounded-lg shadow p-4">
            <img
              src={excursion.img}
              alt={excursion.title}
              className="h-40 w-full object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold">{excursion.title}</h2>
            <p className="text-gray-500">{excursion.country}</p>
            <p className="text-blue-600 font-bold">{excursion.price}</p>
            <p className="text-sm mt-2">{excursion.description}</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Забронировать
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Excursions;
