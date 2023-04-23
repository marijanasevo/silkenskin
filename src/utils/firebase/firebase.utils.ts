import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { Category } from "../../store/category/category.types";
import { Review } from "../../store/review/review.types";
import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyCIH2mpmnV7UhLhOhX0JvwyzQeySGj3grw",
  authDomain: "silken-skin-db.firebaseapp.com",
  projectId: "silken-skin-db",
  storageBucket: "silken-skin-db.appspot.com",
  messagingSenderId: "789976785994",
  appId: "1:789976785994:web:2786073239adc5749e72b3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

export type AdditionalInformation = {
  displayName?: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user", error);
    }
  }

  return userSnapshot;
};

export const createAuthUserWithEmailAndPass = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPass = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getUserDisplayName = async (userUid: string) => {
  const userDocRef = doc(db, "users", userUid);
  const userDoc = await getDoc(userDocRef);
  return userDoc.data()?.displayName;
};

export type Product = {
  userDisplayName: string;
  userEmail?: string;
  productId: string;
  stars: number;
  body: string;
};

export const createReview = async (product: Product) => {
  const { userDisplayName, userEmail, stars, body, productId } = product;
  const createdAt = new Date();
  console.log(userDisplayName, stars, body, createdAt);

  const reviewColRef = collection(db, "reviews");

  try {
    const newDoc = await addDoc(reviewColRef, {
      userDisplayName,
      stars,
      body,
      createdAt,
      productId,
      userEmail,
    });

    console.log(newDoc);
  } catch (err) {
    console.log("Error setting new doc", err);
  }
};

export const getReviewsAndDocuments = async (): Promise<Review[]> => {
  const collectionRef = collection(db, "reviews");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Review);
};
