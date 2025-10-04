import { Link } from "react-router-dom";
import { useState } from "react";
import countries from "../data/countries";

function Navbar({ loggedIn, setLoggedIn }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Travel App</Link>
      <div className="flex gap-4">
        <Link to="/">🏠 Главная</Link>
        <Link to="/tours">🌍 Туры</Link>
        <Link to="/about">ℹ️ О нас</Link>
        <Link to="/contact">✉️ Контакты</Link>
        <Link to="/profile">👤 Профиль</Link>

        {/* Выпадающий список стран */}
        <div className="relative">
          <button onClick={() => setOpen(!open)}>Страны ⬇️</button>
          {open && (
            <div className="absolute bg-white text-black p-2 rounded shadow-lg max-h-60 overflow-y-auto">
              {countries.map(c => (
                <Link
                  key={c.id}
                  to={`/countries/${c.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-1 hover:bg-gray-200"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {loggedIn ? (
          <button onClick={() => setLoggedIn(false)}>🚪 Выйти</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>🔑 Войти</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
