// Datos simulados para desarrollo y pruebas

import { JobPosting, Application } from '@/types';

export const mockJobs: JobPosting[] = [
  {
    id: '1',
    title: 'Desarrollador Full Stack Senior',
    company: 'Tech Solutions Inc',
    description: 'Buscamos un desarrollador con experiencia en React, Node.js y bases de datos.',
    requirements: ['React', 'Node.js', 'PostgreSQL', '5+ años experiencia'],
    salary: { min: 50000, max: 70000, currency: 'USD' },
    location: 'Madrid, España',
    jobType: 'full-time',
    recruiterId: '1',
    recruiterName: 'Carlos García',
    createdAt: new Date().toISOString(),
    applicants: 12,
    tags: ['react', 'nodejs', 'remote-friendly'],
  },
  {
    id: '2',
    title: 'Diseñador UI/UX',
    company: 'Creative Studio',
    description: 'Diseñador con experiencia en diseño de interfaces modernas y responsive.',
    requirements: ['Figma', 'Adobe XD', 'Diseño responsivo', '3+ años experiencia'],
    salary: { min: 35000, max: 50000, currency: 'USD' },
    location: 'Barcelona, España',
    jobType: 'full-time',
    recruiterId: '2',
    recruiterName: 'María López',
    createdAt: new Date().toISOString(),
    applicants: 8,
    tags: ['design', 'ui-ux'],
  },
];

export const mockApplications: Application[] = [
  {
    id: '1',
    jobId: '1',
    jobTitle: 'Desarrollador Full Stack Senior',
    candidateId: '1',
    candidateName: 'Juan Pérez',
    candidateEmail: 'juan@email.com',
    cvUrl: 'https://example.com/cv-juan.pdf',
    coverLetter: 'Estoy interesado en esta posición...',
    status: 'pending',
    appliedAt: new Date().toISOString(),
    companyName: 'Tech Solutions Inc',
  },
];