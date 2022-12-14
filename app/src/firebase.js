import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_7SM7sDCj8ozlbhzeresshFvSx1KbM_M",
  authDomain: "movies-38bbe.firebaseapp.com",
  projectId: "movies-38bbe",
  storageBucket: "movies-38bbe.appspot.com",
  messagingSenderId: "900631504729",
  appId: "1:900631504729:web:af5aa7ff8baf975df48e48",
};

// initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
