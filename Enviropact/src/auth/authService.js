// AuthService.js
import { auth, GoogleAuthProvider } from './firebase'; // Adjust the path as needed
import { signInWithPopup, setPersistence, browserSessionPersistence } from "firebase/auth";
import { addUser } from './firestore';

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    
    try {
      await setPersistence(auth, browserSessionPersistence);
      const result = await signInWithPopup(auth, provider);
      await addUser(result.user);
      return result;
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      throw error;
    }
  };