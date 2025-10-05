import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // тут можно сделать логику сохранения (например localStorage)
    navigate("/login"); // ✅ после регистрации → логин
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-gray-300">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Регистрация
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Имя */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Имя
            </label>
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-500 text-gray-700"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-500 text-gray-700"
              required
            />
          </div>

          {/* Пароль */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Пароль
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-gray-500">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full outline-none text-gray-700"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Повтор пароля */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Повторите пароль
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-gray-500 text-gray-700"
              required
            />
          </div>

          {/* Кнопка регистрации */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow hover:from-gray-800 hover:to-black transition"
          >
            Зарегистрироваться
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Уже есть аккаунт?{" "}
          <a href="/login" className="text-gray-800 hover:underline">
            Войти
          </a>
        </p>
      </div>
    </div>
  );
}
