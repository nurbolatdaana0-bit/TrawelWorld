import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4">Личный кабинет</h2>
        <p className="text-gray-700 mb-6">Привет, <span className="font-semibold">{user.email}</span></p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
        >
          Выйти
        </button>
      </div>
    </div>
  );
}
