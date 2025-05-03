// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-eae7c.firebaseapp.com",
  projectId: "meeting-eae7c",
  storageBucket: "meeting-eae7c.firebasestorage.app",
  messagingSenderId: "118655016334",
  appId: "1:118655016334:web:047393d712631c86bb58df",
  measurementId: "G-PPDVRWE3C5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
