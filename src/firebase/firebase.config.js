// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5-T-hsIpib49uZ8g3E1S4v5J--dXNa7o",
  authDomain: "zakir-book-vibe.firebaseapp.com",
  projectId: "zakir-book-vibe",
  storageBucket: "zakir-book-vibe.appspot.com",
  messagingSenderId: "48276309314",
  appId: "1:48276309314:web:5fd13211fc229d8213f4db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);