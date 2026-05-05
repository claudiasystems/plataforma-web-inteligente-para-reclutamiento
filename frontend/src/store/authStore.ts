// Estado global de autenticación con Zustand

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, User, RegisterData } from '@/types';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: undefined,
      isLoading: false,
      isAuthenticated: false,

      // Función de login
      login: async (email: string, _password: string) => {
        set({ isLoading: true });
        try {
          // Simular llamada a API
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock de usuario logueado
          const mockUser: User = {
            id: '1',
            name: email.includes('recruiter') ? 'Carlos García' : 'Juan Pérez',
            email: email,
            role: email.includes('recruiter') ? 'recruiter' : 'candidate',
            company: email.includes('recruiter') ? 'Tech Solutions Inc' : undefined,
            createdAt: new Date().toISOString(),
          };

          set({
            user: mockUser,
            token: 'mock-token-' + Date.now(),
            isAuthenticated: true,
          });
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
        } finally {
          set({ isLoading: false });
        }
      },

      // Función de registro
      register: async (userData: RegisterData) => {
        set({ isLoading: true });
        try {
          // Simular llamada a API
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const newUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            name: userData.name,
            email: userData.email,
            role: userData.role,
            company: userData.company,
            createdAt: new Date().toISOString(),
          };

          set({
            user: newUser,
            token: 'mock-token-' + Date.now(),
            isAuthenticated: true,
          });
        } catch (error) {
          console.error('Error al registrarse:', error);
        } finally {
          set({ isLoading: false });
        }
      },

      // Función de logout
      logout: () => {
        set({
          user: null,
          token: undefined,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);