// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHutmiv-XDw1KmJKtvYiBLbWGF-I4yIRM",
  authDomain: "vite-contact-67844.firebaseapp.com",
  projectId: "vite-contact-67844",
  storageBucket: "vite-contact-67844.appspot.com",
  messagingSenderId: "969099527801",
  appId: "1:969099527801:web:575bb54deff2f04116b6a8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
