import {
  signInWithEmailAndPassword,
  UserCredential,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from 'config/firebase';
import { AuthTypes, LoginDTO, LoginProps } from '../types';

const standardLogin = ({ email, password }: LoginDTO): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

const googleLogin = (): Promise<UserCredential> => {
  return signInWithPopup(auth, new GoogleAuthProvider());
};

export const login = ({ type, payload }: LoginProps): Promise<UserCredential> => {
  switch (type) {
    case AuthTypes.GOOGLE_AUTH:
      return googleLogin();
    case AuthTypes.STANDARD_AUTH: {
      const { email, password } = payload!;
      if (!email || !password) throw new Error('Wrong parameters for Standard Login');
      return standardLogin({ email, password });
    }
    default:
      throw new Error('Unhandled Auth type');
  }
};
