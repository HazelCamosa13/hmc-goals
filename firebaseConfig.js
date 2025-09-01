import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANwWy_WbHJ4SyQ7JN9FHGLW6M2ViYY520",
  authDomain: "hmc-goals.firebaseapp.com",
  projectId: "hmc-goals",
  storageBucket: "hmc-goals.firebasestorage.app",
  messagingSenderId: "954170976876",
  appId: "1:954170976876:web:1e5418306abec95038c649"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)