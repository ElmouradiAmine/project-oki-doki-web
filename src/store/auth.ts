import { SetState } from 'zustand';
import { AuthState, AuthStore, Store } from 'types';
import { login, signup, logout } from 'features/auth/api';

const initialState: AuthState = {
  currentUser: null,
  isAuthenticated: false,
  isVerified: false,
  error: '',
  isLoading: false,
};

const authSlice = (set: SetState<Store>): AuthStore => ({
  ...initialState,
  login: async ({ email, password }) => {
    set({ isLoading: true, error: '' });
    try {
      const { user } = await login({ email, password });
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
});

export default authSlice;
