import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'config/firebase';
import { LoginDTO } from '../types';

const login = ({ email, password }: LoginDTO) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export default login;
