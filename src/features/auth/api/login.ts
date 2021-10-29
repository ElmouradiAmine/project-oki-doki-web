import {
  signInWithEmailAndPassword,
  UserCredential,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from 'config/firebase';
import { LoginDTO } from '../types';

export const login = ({ email, password }: LoginDTO): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const googleLogin = (): Promise<UserCredential> => {
  return signInWithPopup(auth, new GoogleAuthProvider());
};
