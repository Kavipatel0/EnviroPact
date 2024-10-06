// AuthService.js
import { auth, GoogleAuthProvider } from './firebase'; // Adjust the path as needed
import { signInWithPopup } from "firebase/auth";
import { addUser } from './firestore';

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User signed in: ", user);
    await addUser(user);
    // Here you can save user info to Firestore if needed
  } catch (error) {
    console.error("Error signing in with Google: ", error);
  }
};
