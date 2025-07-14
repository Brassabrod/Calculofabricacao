// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// seus estilos globais
import "./index.css";
import "./style.css";

// componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculadora from "./components/Calculadora";
import Breadcalculator from "./components/Breadcalculator";
import PremiumGate from "./components/PremiumGate";
import Login from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      {/* cabeçalho fixo em todas as páginas */}
      <Header />

      <Routes>
        <Route path="/" element={<Calculadora />} />
        <Route path="/custos" element={<Breadcalculator />} />
        <Route path="/premium" element={<PremiumGate />} />
        <Route path="/login" element={<Login />} />
        {/* exemplo de 404:
          <Route path="*" element={<NotFound />} />
        */}
      </Routes>

      {/* rodapé fixo em todas as páginas */}
      <Footer />
    </BrowserRouter>
  );
}
