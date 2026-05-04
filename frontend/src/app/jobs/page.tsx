// Página de ofertas de empleo

'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import JobCard from '@/components/JobCard';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { mockJobs } from '@/utils/mockData';
import { JOB_TYPES } from '@/utils/constants';

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJobType, setSelectedJobType] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filtrar empleos
  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !selectedJobType || job.jobType === selectedJobType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Ofertas de Empleo</h1>
        <p className="text-xl text-gray-600">Encuentra tu próxima oportunidad laboral</p>
      </div>

      {/* Búsqueda y filtros */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Buscar por título o empresa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search size={18} />}
          />
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2"
          >
            <Filter size={18} />
            Filtros
          </Button>
        </div>

        {/* Panel de filtros */}
        {isFilterOpen && (
          <div className="bg-white p-6 rounded-lg shadow border animate-fadeIn">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Empleo
                </label>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      checked={selectedJobType === ''}
                      onChange={() => setSelectedJobType('')}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">Todos</span>
                  </label>
                  {JOB_TYPES.map((type) => (
                    <label key={type.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        checked={selectedJobType === type.value}
                        onChange={() => setSelectedJobType(type.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lista de empleos */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">No se encontraron ofertas</p>
          <Button
            onClick={() => {
              setSearchTerm('');
              setSelectedJobType('');
            }}
          >
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  );
}