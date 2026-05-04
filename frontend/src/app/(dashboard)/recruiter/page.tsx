// Panel del reclutador

'use client';

import { useState } from 'react';
import { Plus, Eye, Edit, Trash2 } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import ApplicationCard from '@/components/ApplicationCard';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { mockApplications, mockJobs } from '@/utils/mockData';

export default function RecruiterDashboard() {
  const { user } = useAuthStore();
  const [jobs, setJobs] = useState(mockJobs);
  const [applications, setApplications] = useState(mockApplications);
  const [isNewJobModalOpen, setIsNewJobModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  // Obtener postulaciones para el trabajo seleccionado
  const jobApplications = selectedJob
    ? applications.filter((app) => app.jobId === selectedJob)
    : [];

  // Actualizar estado de postulación
  const handleUpdateApplicationStatus = (
    id: string,
    status: typeof applications[0]['status']
  ) => {
    setApplications(
      applications.map((app) => (app.id === id ? { ...app, status } : app))
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Panel de Reclutador
          </h1>
          <p className="text-xl text-gray-600">Bienvenido, {user?.company}</p>
        </div>
        <Button
          variant="secondary"
          onClick={() => setIsNewJobModalOpen(true)}
        >
          <Plus size={18} />
          Nueva Oferta
        </Button>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <div>
            <p className="text-gray-600 text-sm font-medium">Ofertas Activas</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{jobs.length}</p>
          </div>
        </Card>

        <Card>
          <div>
            <p className="text-gray-600 text-sm font-medium">Total de Postulaciones</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{applications.length}</p>
          </div>
        </Card>

        <Card>
          <div>
            <p className="text-gray-600 text-sm font-medium">Pendientes de Revisar</p>
            <p className="text-3xl font-bold text-yellow-600 mt-2">
              {applications.filter((a) => a.status === 'pending').length}
            </p>
          </div>
        </Card>
      </div>

      {/* Modal para crear nueva oferta */}
      <Modal
        isOpen={isNewJobModalOpen}
        onClose={() => setIsNewJobModalOpen(false)}
        title="Crear Nueva Oferta"
        footer={
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setIsNewJobModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button variant="secondary">Crear Oferta</Button>
          </div>
        }
      >
        <form className="space-y-4">
          <Input label="Título del Puesto" placeholder="Ej: Desarrollador Senior" />
          <Input label="Ubicación" placeholder="Madrid, España" />
          <Input label="Descripción" placeholder="Describe la posición..." />
          <Input label="Requisitos" placeholder="Lista separada por comas" />
        </form>
      </Modal>

      {/* Sección de ofertas */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mis Ofertas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <Card
              key={job.id}
              hoverable
              className="cursor-pointer"
              onClick={() => setSelectedJob(job.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600 text-sm">{job.location}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Edit size={18} className="text-blue-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Trash2 size={18} className="text-red-600" />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {job.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-sm font-semibold text-blue-600">
                  {job.applicants} postulantes
                </span>
                <Eye size={18} className="text-gray-400" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Sección de postulaciones */}
      {selectedJob && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Postulaciones para: {jobs.find((j) => j.id === selectedJob)?.title}
          </h2>
          {jobApplications.length > 0 ? (
            <div className="space-y-4">
              {jobApplications.map((app) => (
                <ApplicationCard
                  key={app.id}
                  application={app}
                  onViewCV={(url) => window.open(url, '_blank')}
                  onUpdateStatus={handleUpdateApplicationStatus}
                />
              ))}
            </div>
          ) : (
            <Card>
              <p className="text-center text-gray-600 py-8">
                No hay postulaciones para esta oferta aún.
              </p>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}