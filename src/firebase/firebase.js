import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXtYFXV2npkoEEgCd6ICWIhgz5xcMAnyg",
  authDomain: "devzura-it-labs.firebaseapp.com",
  projectId: "devzura-it-labs",
  storageBucket: "devzura-it-labs.firebasestorage.app",
  messagingSenderId: "901746678141",
  appId: "1:901746678141:web:1f6aa9bb36240467c75414",
  measurementId: "G-GLBV3X7DFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
