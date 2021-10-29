import { User } from 'firebase/auth';
import { LoginDTO, SignupDTO } from 'features/auth/types';

export type AuthState = {
  currentUser: User | null;
  isAuthenticated: boolean;
  isVerified: boolean;
  error: string;
  isLoading: boolean;
};

export type AuthActions = {
  login: (loginDto: LoginDTO) => Promise<void>;
  googleLogin: () => Promise<void>;
  signup: (signupDto: SignupDTO) => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User | null) => void;
};

export type AuthStore = AuthState & AuthActions;
