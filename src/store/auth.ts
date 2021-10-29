import create, { SetState } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AuthState, AuthStore } from 'types';
import { login, signup, logout } from 'features/auth/api';

const initialState: AuthState = {
  currentUser: null,
  isAuthenticated: false,
  isVerified: false,
  error: '',
  isLoading: false,
};

const authStore = (set: SetState<AuthStore>): AuthStore => ({
  ...initialState,
  login: async ({ type, payload }) => {
    set({ isLoading: true, error: '' });
    try {
      const { user } = await login({ type, payload });
      set({ isLoading: false, isAuthenticated: true, isVerified: user.emailVerified });
    } catch (e) {
      set({ isLoading: false, error: JSON.stringify(e) });
    }
  },
  signup: async ({ email, password }) => {
    set({ isLoading: true, error: '' });
    try {
      const { user } = await signup({ email, password });
      set({ isLoading: false, isAuthenticated: true, isVerified: user.emailVerified });
    } catch (e) {
      set({ isLoading: false, error: JSON.stringify(e) });
    }
  },
  logout: async () => {
    set({ isLoading: true, error: '' });
    try {
      await logout();
      set({ isLoading: false, isAuthenticated: false, isVerified: false, currentUser: null });
    } catch (e) {
      set({ isLoading: false, error: JSON.stringify(e) });
    }
  },
  setUser: (user) => {
    set({
      currentUser: user,
      isAuthenticated: user !== null,
      isVerified: user?.emailVerified ?? false,
    });
  },
});

export const useAuth = create(devtools(persist(authStore, { name: 'auth-local-storage' })));
