import { initializeApp } from 'firebase/app';
import {
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import { 
  getFirestore,
  doc,
  getDoc,
  setDoc
 } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCIH2mpmnV7UhLhOhX0JvwyzQeySGj3grw",
  authDomain: "silken-skin-db.firebaseapp.com",
  projectId: "silken-skin-db",
  storageBucket: "silken-skin-db.appspot.com",
  messagingSenderId: "789976785994",
  appId: "1:789976785994:web:2786073239adc5749e72b3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
console.log(auth);

export const signInWithGooglePopup = () => 
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user doesn't exist create data (setDoc)
  // to userDocRef with data from userAuth
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('Error creating the user', error);
    }
  }

  // if user data exists return userDocRef
  return userDocRef;
};

export const createAuthUserWithEmailAndPass = async (email: string, password: string) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPass = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}