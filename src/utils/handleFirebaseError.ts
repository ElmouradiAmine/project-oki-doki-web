import { AuthErrorCodes } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

const handleFirebaseError = (error: Error): string => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case AuthErrorCodes.INVALID_PASSWORD:
        return 'Wrong email address or password.';
      default:
        break;
    }
  }
  return 'An unknown error has occured';
};

export default handleFirebaseError;
