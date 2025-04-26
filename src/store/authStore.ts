import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  signIn: async (email: string, password: string) => {
    // Mock authentication
    if (email === 'admin@example.com' && password === 'admin') {
      set({
        user: {
          id: '1',
          email: 'admin@example.com',
          firstName: 'Admin',
          lastName: 'User',
          role: 'admin'
        }
      });
    } else if (email === 'user@example.com' && password === 'user') {
      set({
        user: {
          id: '2',
          email: 'user@example.com',
          firstName: 'John',
          lastName: 'Doe',
          role: 'customer'
        }
      });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  signOut: () => set({ user: null })
}));