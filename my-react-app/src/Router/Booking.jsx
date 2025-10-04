import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Booking() {
  const { id } = useParams();
  const location = useLocation();
  const tour = location.state; // данные передаются через navigate

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Бронирование подтверждено!\nТур: ${tour?.country}\nИмя: ${name}\nГости: ${guests}\nДата: ${date}`);
  };

  return (
    <div className="page">
      <h2>📅 Бронирование тура</h2>
      {tour ? (
        <div>
          <img src={tour.img} alt={tour.country} style={{ width: "300px" }} />
          <h3>{tour.country}</h3>
          <p>Цена: {tour.price}</p>
        </div>
      ) : (
        <p>Загрузка данных тура...</p>
      )}

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />
        <input
          type="email"
          placeholder="Ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        /><br />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        /><br />
        <button type="submit">Забронировать ✅</button>
      </form>
    </div>
  );
}
