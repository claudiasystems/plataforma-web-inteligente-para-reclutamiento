import axios from 'axios';

// la conexión base usando la URL de .env.local
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Este bloque añade automáticamente el token de seguridad a cada llamada
api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('flowy_token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;