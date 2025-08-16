import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_mMr_xINrCy0tD7c_pA2fgp2AB5lLpOU",
  authDomain: "portfolio-31291.firebaseapp.com",
  projectId: "portfolio-31291",
  storageBucket: "portfolio-31291.firebasestorage.app",
  messagingSenderId: "722284302413",
  appId: "1:722284302413:web:78e0c063bcba99d9ac8c04",
  measurementId: "G-8YKD6VYJL5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
