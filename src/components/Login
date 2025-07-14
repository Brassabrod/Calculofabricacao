// src/components/Login.jsx
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    // aqui você chamaria sua API e, se OK, marcaria o usuário como logado
    window.alert(`Logando ${email}`);
  };
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Entrar</h2>
      <label>
        E-mail:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <label>
        Senha:
        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
