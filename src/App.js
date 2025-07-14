// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css";
import "./index.css";

import Header          from "./components/Header";
import Footer          from "./components/Footer";
import Calculadora     from "./components/Calculadora";
import BreadCalculator from "./components/BreadCalculator";
import PremiumGate     from "./components/PremiumGate";
import Login           from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      {/* cabeçalho fixo em todas as páginas */}
      <Header />

      {/* conteúdo dinâmico por rota */}
      <Routes>
        <Route path="/" element={<Calculadora />} />
        <Route path="/custos" element={<BreadCalculator />} />
        <Route path="/premium" element={<PremiumGate />} />
        <Route path="/login" element={<Login />} />
        {/* Para rota 404, se quiser:
            <Route path="*" element={<NotFound />} />
        */}
      </Routes>

      {/* rodapé fixo em todas as páginas */}
      <Footer />
    </BrowserRouter>
  );
}
