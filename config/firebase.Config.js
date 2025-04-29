// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "interviews-f807d.firebaseapp.com",
  projectId: "interviews-f807d",
  storageBucket: "interviews-f807d.firebasestorage.app",
  messagingSenderId: "508707418295",
  appId: "1:508707418295:web:41bf999cc2622c98f4dd32",
  measurementId: "G-3JSHLRD79M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
