// Componente para tarjeta de oferta de empleo

import Link from 'next/link';
import { MapPin, DollarSign, Briefcase, Clock } from 'lucide-react';
import { JobPosting } from '@/types';
import Card from './Card';

interface JobCardProps {
  job: JobPosting;
}

export default function JobCard({ job }: JobCardProps) {
  // Traducir tipo de empleo
  const jobTypeLabels = {
    'full-time': 'Tiempo Completo',
    'part-time': 'Medio Tiempo',
    'contract': 'Contrato',
  };

  return (
    <Link href={`/jobs/${job.id}`}>
      <Card hoverable className="cursor-pointer">
        {/* Header: Título y empresa */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
          <p className="text-gray-600 font-medium">{job.company}</p>
        </div>

        {/* Descripción corta */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {job.description}
        </p>

        {/* Información: ubicación, salario, tipo */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MapPin size={16} className="text-green-600" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <DollarSign size={16} className="text-green-600" />
            <span>
              ${job.salary.min} - ${job.salary.max} {job.salary.currency}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Briefcase size={16} className="text-green-600" />
            <span>{jobTypeLabels[job.jobType]}</span>
          </div>
        </div>

        {/* Tags y postulantes */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Número de postulantes */}
        <div className="flex items-center gap-2 pt-4 border-t text-gray-600 text-sm">
          <Clock size={16} />
          <span>{job.applicants} postulantes</span>
        </div>
      </Card>
    </Link>
  );
}