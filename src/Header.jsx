import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.png" alt="Pão3x4" className="h-12" />
      </Link>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-black">Massa</Link>
        <Link to="/custos" className="text-gray-700 hover:text-black">Custo Pães</Link>
      </nav>
    </header>
  );
}
