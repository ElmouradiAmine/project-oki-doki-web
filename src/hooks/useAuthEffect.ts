import { useEffect } from 'react';
import { auth } from 'config/firebase';
import { useAuth } from 'store';

const useAuthEffect = () => {
  const { setUser } = useAuth();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);
};
export default useAuthEffect;
