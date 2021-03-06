import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA35Lc0PMN7lVGMFU229SPVgr55RiBYHE8",
  authDomain: "fictional-ecomm.firebaseapp.com",
  databaseURL: "https://fictional-ecomm.firebaseio.com",
  projectId: "fictional-ecomm",
  storageBucket: "fictional-ecomm.appspot.com",
  messagingSenderId: "1099297702645",
  appId: "1:1099297702645:web:44cbc8e2dfda6bbc96bbbc",
  measurementId: "G-DJCYRZX3BN",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`Error creating user`, error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
