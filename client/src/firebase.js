// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kimbal-estate.firebaseapp.com",
  projectId: "kimbal-estate",
  storageBucket: "kimbal-estate.appspot.com",
  messagingSenderId: "597406625161",
  appId: "1:597406625161:web:c636a998c7009c42bd0558"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);