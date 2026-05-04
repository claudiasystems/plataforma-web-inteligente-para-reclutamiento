// Componente para tarjeta de postulación

import { FileText, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Application } from '@/types';
import Card from './Card';
import Button from './Button';

interface ApplicationCardProps {
  application: Application;
  onViewCV?: (cvUrl: string) => void;
  onUpdateStatus?: (id: string, status: Application['status']) => void;
}

export default function ApplicationCard({
  application,
  onViewCV,
  onUpdateStatus,
}: ApplicationCardProps) {
  // Iconos de estado
  const statusIcons = {
    pending: <Clock className="text-yellow-500" size={20} />,
    reviewed: <FileText className="text-blue-500" size={20} />,
    accepted: <CheckCircle className="text-green-500" size={20} />,
    rejected: <XCircle className="text-red-500" size={20} />,
  };

  // Estilos de estado
  const statusStyles = {
    pending: 'bg-yellow-100 text-yellow-800',
    reviewed: 'bg-blue-100 text-blue-800',
    accepted: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };

  const statusLabels = {
    pending: 'Pendiente',
    reviewed: 'Revisado',
    accepted: 'Aceptado',
    rejected: 'Rechazado',
  };

  return (
    <Card>
      {/* Header: nombre y estatus */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{application.candidateName}</h3>
          <p className="text-gray-600">{application.jobTitle}</p>
        </div>
        <div className={`px-3 py-1 rounded-full flex items-center gap-2 font-semibold text-sm ${statusStyles[application.status]}`}>
          {statusIcons[application.status]}
          {statusLabels[application.status]}
        </div>
      </div>

      {/* Información de contacto */}
      <div className="mb-4 pb-4 border-b">
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Email:</span> {application.candidateEmail}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Empresa:</span> {application.companyName}
        </p>
      </div>

      {/* Carta de presentación */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">Carta de Presentación:</p>
        <p className="text-gray-600 text-sm line-clamp-3">{application.coverLetter}</p>
      </div>

      {/* Botones de acción */}
      <div className="flex gap-2 pt-4 border-t">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onViewCV?.(application.cvUrl)}
        >
          <FileText size={16} />
          Ver CV
        </Button>
        {onUpdateStatus && application.status === 'pending' && (
          <>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onUpdateStatus(application.id, 'accepted')}
            >
              Aceptar
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => onUpdateStatus(application.id, 'rejected')}
            >
              Rechazar
            </Button>
          </>
        )}
      </div>
    </Card>
  );
}