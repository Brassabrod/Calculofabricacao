// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-purple-700 text-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/">
-       <img
-         src={`${process.env.PUBLIC_URL}/logo.png`}
-         alt="Pão 3x4"
-         className="h-12"
-       />
+       <img
+         src={`${process.env.PUBLIC_URL}/logo_pão3x4.png`}
+         alt="Pão 3x4"
+         className="h-12"
+       />
      </Link>
      <nav className="space-x-6">
        <Link to="/" className="hover:underline">Massa</Link>
        <Link to="/custos" className="hover:underline">Custo Pães</Link>
        <Link to="/premium" className="hover:underline">Premium</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </nav>
    </header>
  );
}
