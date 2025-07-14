// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-purple-700 text-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/logo_pao3x4.png`}
          alt="Pão 3×4"
          className="h-12"
        />
      </Link>
      <nav className="space-x-6">
        <Link to="/" className="hover:underline">Massa</Link>
        <Link to="/custos" className="hover:underline">Custo Pães</Link>
      </nav>
    </header>
  );
}
