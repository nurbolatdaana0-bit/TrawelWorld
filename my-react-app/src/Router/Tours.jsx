import { useNavigate } from "react-router-dom";

export default function Tours() {
  const navigate = useNavigate();

  const tours = [
    { country: "Италия", price: "1000$", img: "/italy.jpg" },
    { country: "Франция", price: "1200$", img: "/france.jpg" },
  ];

  const handleBooking = (tour) => {
    navigate(`/booking/${tour.country}`, { state: tour });
  };

  return (
    <div>
      <h2>Туры</h2>
      {tours.map((tour, i) => (
        <div key={i}>
          <img src={tour.img} alt={tour.country} width="200" />
          <h3>{tour.country}</h3>
          <p>{tour.price}</p>
          <button onClick={() => handleBooking(tour)}>Забронировать</button>
        </div>
      ))}
    </div>
  );
}
