import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD4IMy7pia8XpqBQD-W9UXkhbpHEzZJk1U",
  authDomain: "disney-99eed.firebaseapp.com",
  projectId: "disney-99eed",
  storageBucket: "disney-99eed.appspot.com",
  messagingSenderId: "1038341140755",
  appId: "1:1038341140755:web:6a9146ee9641062082aae6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider= new GoogleAuthProvider();