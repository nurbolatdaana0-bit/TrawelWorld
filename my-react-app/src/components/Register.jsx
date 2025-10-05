import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers.find((u) => u.email === email)) {
      alert("Пользователь с таким email уже существует");
      return;
    }
    storedUsers.push({ email, password });
    localStorage.setItem("users", JSON.stringify(storedUsers));
    alert("Регистрация успешна!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-400">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Регистрация</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500">
          Уже есть аккаунт?{" "}
          <Link to="/login" className="text-yellow-600 font-semibold hover:underline">
            Войдите
          </Link>
        </p>
      </div>
    </div>
  );
}
