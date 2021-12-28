import firebase from "firebase/compat/app";
import dotenv from "dotenv";
import "firebase/auth";
import { getAuth } from "firebase/auth";
dotenv.config();
console.log(process.env);
const app = firebase.initializeApp({
  // apiKey: "AIzaSyDoeeiQyUbfyzXfG43arJNIY7uJwtxvXjY",
  // authDomain: "spl-2-4789a.firebaseapp.com",
  // projectId: "spl-2-4789a",
  // storageBucket: "spl-2-4789a.appspot.com",
  // messagingSenderId: "42747211864",
  // appId: "1:42747211864:web:84e10319db4f5bc3f95a2d",
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = getAuth(app);
export default app;
