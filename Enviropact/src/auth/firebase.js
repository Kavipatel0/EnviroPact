// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // For authentication
import { getFirestore } from "firebase/firestore"; // For Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCakifeIEhDpcprY6R2MgrR6mm52fXKJKc",
  authDomain: "environment-app-bde15.firebaseapp.com",
  projectId: "environment-app-bde15",
  storageBucket: "environment-app-bde15.appspot.com",
  messagingSenderId: "456473675419",
  appId: "1:456473675419:web:cca3f1fd83865bd155a83e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, GoogleAuthProvider };
