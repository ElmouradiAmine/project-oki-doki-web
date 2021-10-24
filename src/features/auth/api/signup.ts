import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from '@config/firebase';
import { SignupDTO } from '../types';

const signup = ({ email, password }: SignupDTO): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export default signup;
