// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixai-dd03f.firebaseapp.com",
  projectId: "netflixai-dd03f",
  storageBucket: "netflixai-dd03f.firebasestorage.app",
  messagingSenderId: "1016905425057",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-8TGC1SX99B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();