import { auth } from 'config/firebase';
import { signOut } from 'firebase/auth';

const logout = (): Promise<void> => {
  return signOut(auth);
};

export default logout;
