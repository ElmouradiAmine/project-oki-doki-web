import create, { SetState } from 'zustand';
import { Store } from 'types';
import authSlice from './auth';

const useStore = create((set: SetState<Store>) => ({
  auth: { ...authSlice(set) },
}));

export default useStore;
