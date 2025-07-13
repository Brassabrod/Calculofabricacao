import React, { useState } from 'react';

export default function BreadCalculator() {
  const [ingredients, setIngredients] = useState([
    { name: 'Farinha (kg)', pricePerUnit: '', qty: '' },
    { name: 'Água (l)',      pricePerUnit: '', qty: '' },
    { name: 'Fermento (g)',  pricePerUnit: '', qty: '' },
    { name: 'Sal (g)',       pricePerUnit: '', qty: '' },
  ]);
  const [overhead, setOverhead] = useState('');

  function updateIngredient(i, field, value) {
    const copy = [...ingredients];
    copy[i][field] = value;
    setIngredients(copy);
  }

  const totalCost = ingredients.reduce((sum, ing) => {
    const price = parseFloat(ing.pricePerUnit) || 0;
    const qty   = parseFloat(ing.qty) || 0;
    return sum + price * qty;
  }, 0) + (parseFloat(overhead) || 0);

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Custo de Produção de Pães</h1>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-2 py-1">Ingrediente</th>
            <th className="border px-2 py-1">Preço/Unidade (R$)</th>
            <th className="border px-2 py-1">Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ing, i) => (
            <tr key={i}>
              <td className="border px-2 py-1">{ing.name}</td>
              <td className="border px-2 py-1">
                <input
                  type="number" step="0.01"
                  className="w-full p-1 border rounded"
                  value={ing.pricePerUnit}
                  onChange={e => updateIngredient(i, 'pricePerUnit', e.target.value)}
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  type="number" step="0.01"
                  className="w-full p-1 border rounded"
                  value={ing.qty}
                  onChange={e => updateIngredient(i, 'qty', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center space-x-2">
        <label className="w-1/3">Custos Fixos (R$):</label>
        <input
          type="number" step="0.01"
          className="w-2/3 p-1 border rounded"
          value={overhead}
          onChange={e => setOverhead(e.target.value)}
        />
      </div>

      <div className="text-right text-xl">
        <span className="font-semibold">Custo Total:</span> R$ {totalCost.toFixed(2)}
      </div>
    </div>
  );
}

