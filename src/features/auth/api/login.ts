import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from 'config/firebase';
import { LoginDTO } from '../types';

const login = ({ email, password }: LoginDTO): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export default login;
