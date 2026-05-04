// Panel del candidato

'use client';

import { useState } from 'react';
import { Upload, FileText, Briefcase, CheckCircle } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import ApplicationCard from '@/components/ApplicationCard';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Card from '@/components/Card';
import Modal from '@/components/Modal';
import { mockApplications } from '@/utils/mockData';

export default function CandidateDashboard() {
  const { user } = useAuthStore();
  const [applications, setApplications] = useState(mockApplications);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);

  // Manejar carga de CV
  const handleCVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setCvFile(file);
    }
  };

  // Guardar CV
  const handleSaveCV = () => {
    if (cvFile) {
      // Aquí iría la lógica para guardar el CV
      setIsUploadModalOpen(false);
      alert('CV guardado exitosamente');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Bienvenido, {user?.name}
        </h1>
        <p className="text-xl text-gray-600">Gestiona tu perfil y postulaciones</p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Postulaciones Totales</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{applications.length}</p>
            </div>
            <Briefcase size={40} className="text-blue-600 opacity-20" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Pendientes</p>
              <p className="text-3xl font-bold text-yellow-600 mt-2">
                {applications.filter((a) => a.status === 'pending').length}
              </p>
            </div>
            <FileText size={40} className="text-yellow-600 opacity-20" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Aceptadas</p>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {applications.filter((a) => a.status === 'accepted').length}
              </p>
            </div>
            <CheckCircle size={40} className="text-green-600 opacity-20" />
          </div>
        </Card>
      </div>

      {/* Sección de CV */}
      <Card className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tu CV</h2>
            <p className="text-gray-600">
              {user?.cv ? 'CV cargado' : 'Carga tu CV para que los reclutadores te encuentren'}
            </p>
          </div>
          <Button
            variant="secondary"
            onClick={() => setIsUploadModalOpen(true)}
          >
            <Upload size={18} />
            {user?.cv ? 'Actualizar CV' : 'Subir CV'}
          </Button>
        </div>
      </Card>

      {/* Modal de carga de CV */}
      <Modal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title="Subir tu CV"
        footer={
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setIsUploadModalOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="secondary"
              onClick={handleSaveCV}
              disabled={!cvFile}
            >
              Guardar CV
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <p className="text-gray-600 text-sm">
            Sube un archivo PDF de tu CV (máximo 5 MB)
          </p>
          <Input
            type="file"
            accept=".pdf"
            onChange={handleCVUpload}
            label="Seleccionar archivo"
          />
          {cvFile && (
            <p className="text-sm text-green-600 font-semibold">
              ✓ Archivo seleccionado: {cvFile.name}
            </p>
          )}
        </div>
      </Modal>

      {/* Postulaciones */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tus Postulaciones</h2>
        {applications.length > 0 ? (
          <div className="space-y-4">
            {applications.map((app) => (
              <ApplicationCard
                key={app.id}
                application={app}
                onViewCV={(url) => window.open(url, '_blank')}
              />
            ))}
          </div>
        ) : (
          <Card>
            <p className="text-center text-gray-600 py-8">
              Aún no has realizado postulaciones. ¡Busca ofertas interesantes!
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}