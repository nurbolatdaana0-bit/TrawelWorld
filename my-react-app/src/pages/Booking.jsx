import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Booking() {
  const { id } = useParams();
  const location = useLocation();
  const tour = location.state;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Бронирование подтверждено!\nТур: ${tour?.country}\nИмя: ${name}`);
  };

  return (
    <div>
      <h2>Бронирование тура</h2>
      {tour ? (
        <div>
          <img src={tour.img} alt={tour.country} width="200" />
          <h3>{tour.country}</h3>
          <p>{tour.price}</p>
        </div>
      ) : <p>Загрузка...</p>}

      <form onSubmit={handleSubmit}>
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
