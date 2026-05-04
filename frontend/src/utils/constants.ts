// Constantes y configuraciones globales

export const COLORS = {
  primary: '#0066cc',
  secondary: '#00cc66',
  danger: '#ff4444',
  warning: '#ffaa00',
  light: '#f5f7fa',
  dark: '#1a1a1a',
  gray: '#666666',
};

export const JOB_TYPES = [
  { value: 'full-time', label: 'Tiempo Completo' },
  { value: 'part-time', label: 'Medio Tiempo' },
  { value: 'contract', label: 'Contrato' },
];

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/recluteapp',
  linkedin: 'https://linkedin.com/company/recluteapp',
  twitter: 'https://twitter.com/recluteapp',
  instagram: 'https://instagram.com/recluteapp',
};

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';