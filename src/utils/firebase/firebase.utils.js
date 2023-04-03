import { initializeApp } from 'firebase/app';
import {
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
        createdAt
      })
    } catch (error) {
      console.log('Error creating the user', error);
    }
  }

  // if user data exists return userDocRef
  return userDocRef;
};