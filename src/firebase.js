// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: "AIzaSyAT_GZN43qdyWQ0_ldXxr-TjMErqLheaO8",
//   authDomain: "eco-gaurdian-bot.firebaseapp.com",
//   databaseURL: "https://eco-gaurdian-bot-default-rtdb.firebaseio.com",
//   projectId: "eco-gaurdian-bot",
//   storageBucket: "eco-gaurdian-bot.appspot.com",
//   messagingSenderId: "652056293938",
//   appId: "1:652056293938:web:44a4ed6a512389f35d022b",
//   measurementId: "G-ZPD2EVZX9D"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app);
let db = getFirestore(app);
export {
  auth,
  db
}