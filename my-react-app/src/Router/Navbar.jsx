import { Link, useNavigate } from "react-router-dom";

function Navbar({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const country = e.target.value;
    if (country) navigate(`/countries/${country}`);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-orange-500 text-white shadow">
      <div className="font-bold text-xl">✈️ TravelWorld</div>
      <div className="flex gap-4 items-center">
        <Link to="/">🏠 Home</Link>
        <Link to="/tours">🌍 Туры</Link>
        <Link to="/about">ℹ️ Про нас</Link>
        <Link to="/contact">🔒 Безопасность</Link>

        <select onChange={handleChange} defaultValue="" className="text-black rounded px-2">
          <option value="" disabled>Страны</option>
          <option value="italy">Италия</option>
          <option value="madagascar">Мадагаскар</option>
          <option value="japan">Япония</option>
        </select>

        <button 
          onClick={() => setLoggedIn(!loggedIn)}
          className="bg-white text-orange-600 font-semibold px-3 py-1 rounded"
        >
          {loggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
