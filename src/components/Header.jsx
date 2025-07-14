// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-[#5c3362] shadow-md flex items-center px-6 z-50">
      {/* Logo no canto esquerdo */}
      <Link to="/">
        <img
          src="/logo.png"
          alt="Pão3x4"
          className="h-10 object-contain"
        />
      </Link>

      {/* Espaço entre logo e nav */}
      <div className="flex-1" />

      {/* Navegação no canto direito */}
      <nav className="space-x-6">
        <Link
          to="/"
          className="text-white font-semibold hover:opacity-90 transition"
        >
          Massa
        </Link>
        <Link
          to="/custos"
          className="text-white font-semibold hover:opacity-90 transition"
        >
          Custo Pães
        </Link>
        <Link
          to="/premium"
          className="text-white font-semibold hover:opacity-90 transition"
        >
          Premium
        </Link>
        <Link
          to="/login"
          className="text-white font-semibold hover:opacity-90 transition"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
