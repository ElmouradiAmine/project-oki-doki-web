import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from 'config/firebase';
import { LoginDTO } from '../types';

export const login = ({ email, password }: LoginDTO): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};
