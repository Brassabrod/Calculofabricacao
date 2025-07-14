// src/components/PremiumGate.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// aqui você puxa do Context/Redux/localStorage
const isLoggedIn = !!localStorage.getItem('token');

export default function PremiumGate({ children }) {
  return isLoggedIn
    ? children
    : <Navigate to="/login" replace />;
}
