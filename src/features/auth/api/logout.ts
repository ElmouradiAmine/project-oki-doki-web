import { auth } from 'config/firebase';
import { signOut } from 'firebase/auth';

export const logout = (): Promise<void> => {
  return signOut(auth);
};
