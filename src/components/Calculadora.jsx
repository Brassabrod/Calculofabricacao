// src/components/Calculadora.jsx
import React, { useState } from "react";

const LOGO_IMG = "/logo_pao3x4.png";

export default function Calculadora() {
  const dentroDaFaixa = (valor, min, max) => valor >= min && valor <= max;
  const Aviso = ({ condicao, texto, className }) =>
    !condicao ? (
      <p className={className || "pl-[130px] text-xs text-[#ffc857] mt-1 font-semibold"}>
        {texto}
      </p>
    ) : null;

  // Estados Pão Simples
  const [qtdSimples, setQtdSimples] = useState("5");
  const [pesoSimples, setPesoSimples] = useState("500");
  const [perdaSimples, setPerdaSimples] = useState("12");
  const [aguaSimples, setAguaSimples] = useState("70");
  const [fermentoSimples, setFermentoSimples] = useState("20");
  const [salSimples, setSalSimples] = useState("2");

  // Estados Pão Recheado
  const [qtdRecheado, setQtdRecheado] = useState("5");
  const [pesoRecheado, setPesoRecheado] = useState("500");
  const [perdaRecheado, setPerdaRecheado] = useState("12");
  const [aguaRecheado, setAguaRecheado] = useState("70");
  const [fermentoRecheado, setFermentoRecheado] = useState("20");
  const [salRecheado, setSalRecheado] = useState("2");
  const [recheio, setRecheio] = useState("30");

  // Helpers de formatação
  const sanitize = (val) =>
    typeof val === "string"
      ? val.replace(/[^0-9.,]/g, "").replace(",", ".")
      : val;
  const parse = (val) => parseFloat(sanitize(val)) || 0;

  // Cálculos Pão Simples
  const perdaDecimalSimples = parse(perdaSimples) / 100;
  const totalFinalSimples = parse(qtdSimples) * parse(pesoSimples);
  const massaTotalSimples = totalFinalSimples / (1 - perdaDecimalSimples);
  const farinhaSimples =
    massaTotalSimples /
    (1 +
      parse(aguaSimples) / 100 +
      parse(fermentoSimples) / 100 +
      parse(salSimples) / 100);

  // Cálculos Pão Recheado
  const perdaDecimalRecheado = parse(perdaRecheado) / 100;
  const totalFinalRecheado = parse(qtdRecheado) * parse(pesoRecheado);
  const massaTotalRecheado = totalFinalRecheado / (1 - perdaDecimalRecheado);
  const farinhaRecheado =
    massaTotalRecheado /
    (1 +
      parse(aguaRecheado) / 100 +
      parse(fermentoRecheado) / 100 +
      parse(salRecheado) / 100 +
      parse(recheio) / 100);

  // Props comuns para inputs
  const inputProps = (value, setter, min = null, max = null, step = "1") => ({
    type: "text",
    inputMode: "decimal",
    pattern: "[0-9]*[.,]?[0-9]*",
    value,
    onInput: e => {
      const v = e.target.value.replace(/[^0-9.,]/g, "");
      setter(v);
    },
    onBlur: e => {
      let v = e.target.value.replace(",", ".");
      v = parseFloat(v);
      if (isNaN(v)) v = min !== null ? min : "";
      if (min !== null && v < min) v = min;
      if (max !== null && v > max) v = max;
      setter(v.toString());
    },
    className:
      "border border-gray-300 bg-[#fffbe9] text-[#23201a] rounded px-2 py-1 focus:ring-2 focus:ring-yellow-800 transition text-base",
    style: { width: "100px", marginLeft: "0.5rem" },
    step
  });

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#232221]">
      {/* Header local (você pode substituir por seu componente Header) */}
      <div className="w-full flex flex-col items-center pt-7 pb-3">
        <img src={LOGO_IMG} alt="Pão 3x4" style={{ height: 65, marginBottom: 12 }} />
        <h1 className="text-3xl font-extrabold text-center text-[#62364F]">
          Calculadora de Massa Brassabröd
        </h1>
        <span className="italic text-lg text-[#62364F]">
          Método fácil, visual e seguro para calcular pão
        </span>
      </div>

      <main className="flex flex-wrap justify-center gap-6 w-full max-w-[900px] px-2 mb-8">
        {/* Pão Simples */}
        <div className="bg-[#232221] p-6 rounded-2xl shadow-md w-full max-w-[340px] border border-yellow-200">
          <h2 className="text-xl text-center text-[#d1d1d1] mb-4">🥖 Pão Simples</h2>

          {/** Campos de entrada **/}
          <div className="space-y-3">
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Quantidade:</label>
              <input {...inputProps(qtdSimples, setQtdSimples)} />
            </div>
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Peso final (g):</label>
              <input {...inputProps(pesoSimples, setPesoSimples)} />
            </div>
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Perda (%):</label>
              <input {...inputProps(perdaSimples, setPerdaSimples, 10, 20)} />
            </div>
            <Aviso
              condicao={dentroDaFaixa(parse(perdaSimples), 10, 20)}
              texto="⚠️ Perda fora da faixa ideal (10%–20%)"
            />
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Água (%):</label>
              <input {...inputProps(aguaSimples, setAguaSimples, 50, 85)} />
            </div>
            <Aviso
              condicao={dentroDaFaixa(parse(aguaSimples), 50, 85)}
              texto="⚠️ Água fora da faixa ideal (50%–85%)"
            />
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Fermento (%):</label>
              <input {...inputProps(fermentoSimples, setFermentoSimples, 10, 30)} />
            </div>
            <Aviso
              condicao={dentroDaFaixa(parse(fermentoSimples), 10, 30)}
              texto="⚠️ Fermento fora da faixa ideal (10%–30%)"
            />
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Sal (%):</label>
              <input {...inputProps(salSimples, setSalSimples, 1.5, 2.5, "0.1")} />
            </div>
            <Aviso
              condicao={dentroDaFaixa(parse(salSimples), 1.5, 2.5)}
              texto="⚠️ Sal fora da faixa ideal (1.5%–2.5%)"
            />
          </div>

          <hr className="my-4 border-yellow-200" />

          {/** Resultados **/}
          <ul className="text-white space-y-1">
            <li>Farinha: <strong>{farinhaSimples.toFixed(0)} g</strong></li>
            <li>Água: <strong>{(farinhaSimples * parse(aguaSimples) /100).toFixed(0)} g</strong></li>
            <li>Fermento: <strong>{(farinhaSimples * parse(fermentoSimples) /100).toFixed(0)} g</strong></li>
            <li>Sal: <strong>{(farinhaSimples * parse(salSimples) /100).toFixed(0)} g</strong></li>
            <li>Massa total: <strong>{massaTotalSimples.toFixed(0)} g</strong></li>
            <li>Rendimento: <strong>{qtdSimples} pães de {(massaTotalSimples/parse(qtdSimples)).toFixed(0)} g</strong></li>
          </ul>
        </div>

        {/* Pão Recheado */}
        <div className="bg-[#232221] p-6 rounded-2xl shadow-md w-full max-w-[340px] border border-yellow-200">
          <h2 className="text-xl text-center text-[#d1d1d1] mb-4">🧀 Pão Recheado</h2>

          <div className="space-y-3">
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Quantidade:</label>
              <input {...inputProps(qtdRecheado, setQtdRecheado)} />
            </div>
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Peso final (g):</label>
              <input {...inputProps(pesoRecheado, setPesoRecheado)} />
            </div>
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Perda (%):</label>
              <input {...inputProps(perdaRecheado, setPerdaRecheado, 10, 20)} />
            </div>
            <Aviso
              condicao={dentroDaFaixa(parse(perdaRecheado), 10, 20)}
              texto="⚠️ Perda fora da faixa ideal (10%–20%)"
            />
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Água (%):</label>
              <input {...inputProps(aguaRecheado, setAguaRecheado, 50, 85)} />
            </div>
            <Aviso
              condicao={dentroDaFaixa(parse(aguaRecheado), 50, 85)}
              texto="⚠️ Água fora da faixa ideal (50%–85%)"
            />
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Fermento (%):</label>
              <input {...inputProps(fermentoRecheado, setFermentoRecheado, 10, 30)} />
            </div>
            <Aviso
              condicao={dentroDaFaixa(parse(fermentoRecheado), 10, 30)}
              texto="⚠️ Fermento fora da faixa ideal (10%–30%)"
            />
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Sal (%):</label>
              <input {...inputProps(salRecheado, setSalRecheado, 1.5, 2.5, "0.1")} />
            </div>
            <Aviso
              condicao={dentroDaFaixa(parse(salRecheado), 1.5, 2.5)}
              texto="⚠️ Sal fora da faixa ideal (1.5%–2.5%)"
            />
            <div className="flex items-center">
              <label className="w-[130px] text-[#b0b0b0]">Recheio (%):</label>
              <input {...inputProps(recheio, setRecheio, 10, 30)} />
            </div>
            <Aviso
              condicao={dentroDaFaixa(parse(recheio), 10, 30)}
              texto="⚠️ Recheio fora da faixa ideal (10%–30%)"
            />
          </div>

          <hr className="my-4 border-yellow-200" />

          <ul className="text-white space-y-1">
            <li>Farinha: <strong>{farinhaRecheado.toFixed(0)} g</strong></li>
            <li>Água: <strong>{(farinhaRecheado * parse(aguaRecheado)/100).toFixed(0)} g</strong></li>
            <li>Fermento: <strong>{(farinhaRecheado * parse(fermentoRecheado)/100).toFixed(0)} g</strong></li>
            <li>Sal: <strong>{(farinhaRecheado * parse(salRecheado)/100).toFixed(0)} g</strong></li>
            <li>Recheio: <strong>{(farinhaRecheado * parse(recheio)/100).toFixed(0)} g</strong></li>
            <li>Massa total: <strong>{massaTotalRecheado.toFixed(0)} g</strong></li>
            <li>Rendimento: <strong>{qtdRecheado} pães de {(massaTotalRecheado/parse(qtdRecheado)).toFixed(0)} g</strong></li>
          </ul>
        </div>
      </main>

      {/* Footer local (substitua pelo seu componente Footer) */}
      <div className="py-6 text-center text-gray-400">
        © {new Date().getFullYear()} Seu Nome ou Empresa  
      </div>
    </div>
  );
}
