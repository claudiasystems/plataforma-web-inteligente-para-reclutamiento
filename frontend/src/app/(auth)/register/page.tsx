// Página de registro

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { User, Mail, Lock, Briefcase } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { RegisterData } from '@/types';

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { register, isLoading } = useAuthStore();

  const [role, setRole] = useState<'candidate' | 'recruiter'>(
    (searchParams.get('role') as 'candidate' | 'recruiter') || 'candidate'
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    company: '',
  });
  const [error, setError] = useState('');

  // Manejar cambios en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validaciones
    if (formData.password !== formData.passwordConfirm) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (role === 'recruiter' && !formData.company) {
      setError('El nombre de la empresa es requerido');
      return;
    }

    try {
      const registerData: RegisterData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: role,
        company: role === 'recruiter' ? formData.company : undefined,
      };

      await register(registerData);
      router.push('/');
    } catch (err) {
      setError('Error al registrarse. Intenta de nuevo.');
    }
  };

  return (
    <div className="animate-fadeIn">
      <Card className="mb-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">R</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Crear Cuenta</h1>
          <p className="text-gray-600 mt-2">Únete a RecluteApp hoy mismo</p>
        </div>

        {/* Selector de rol */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-semibold text-gray-700 mb-3">¿Eres candidato o reclutador?</p>
          <div className="flex gap-4">
            <label className="flex items-center flex-1 cursor-pointer">
              <input
                type="radio"
                value="candidate"
                checked={role === 'candidate'}
                onChange={(e) => setRole(e.target.value as 'candidate')}
                className="w-4 h-4 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">Candidato</span>
            </label>
            <label className="flex items-center flex-1 cursor-pointer">
              <input
                type="radio"
                value="recruiter"
                checked={role === 'recruiter'}
                onChange={(e) => setRole(e.target.value as 'recruiter')}
                className="w-4 h-4 text-blue-600"
              />
              <span className="ml-2 text-sm text-gray-700">Reclutador</span>
            </label>
          </div>
        </div>

        {/* Mensaje de error */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nombre Completo"
            type="text"
            name="name"
            placeholder="Juan Pérez"
            value={formData.name}
            onChange={handleChange}
            required
            icon={<User size={18} />}
          />

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            icon={<Mail size={18} />}
          />

          {role === 'recruiter' && (
            <Input
              label="Nombre de la Empresa"
              type="text"
              name="company"
              placeholder="Tu Empresa S.A."
              value={formData.company}
              onChange={handleChange}
              required
              icon={<Briefcase size={18} />}
            />
          )}

          <Input
            label="Contraseña"
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            icon={<Lock size={18} />}
            helperText="Mínimo 6 caracteres"
          />

          <Input
            label="Confirmar Contraseña"
            type="password"
            name="passwordConfirm"
            placeholder="••••••••"
            value={formData.passwordConfirm}
            onChange={handleChange}
            required
            icon={<Lock size={18} />}
          />

          {/* Términos y condiciones */}
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 mt-1"
              required
            />
            <span className="ml-2 text-sm text-gray-600">
              Acepto los{' '}
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                términos y condiciones
              </Link>
            </span>
          </label>

          {/* Botón de envío */}
          <Button
            type="submit"
            size="lg"
            isLoading={isLoading}
            className="w-full"
          >
            Crear Cuenta
          </Button>
        </form>
      </Card>

      {/* Link a login */}
      <p className="text-center text-gray-600">
        ¿Ya tienes cuenta?{' '}
        <Link href="/login" className="text-blue-600 font-semibold hover:text-blue-700">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}