import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW-htIDiRrmekeL3XCMD0punIknUVZEJE",
  authDomain: "productyesfitness.firebaseapp.com",
  projectId: "productyesfitness",
  storageBucket: "productyesfitness.appspot.com",
  messagingSenderId: "1025841434171",
  appId: "1:1025841434171:web:f0aa6dbf553374aa4f561e",
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
