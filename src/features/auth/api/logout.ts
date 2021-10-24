import { auth } from '@config/firebase';
import { signOut } from 'firebase/auth';

const logout = () => {
  return signOut(auth);
};

export default logout;
