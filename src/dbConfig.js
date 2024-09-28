// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT_GZN43qdyWQ0_ldXxr-TjMErqLheaO8",
  authDomain: "eco-gaurdian-bot.firebaseapp.com",
  databaseURL: "https://eco-gaurdian-bot-default-rtdb.firebaseio.com",
  projectId: "eco-gaurdian-bot",
  storageBucket: "eco-gaurdian-bot.appspot.com",
  messagingSenderId: "652056293938",
  appId: "1:652056293938:web:44a4ed6a512389f35d022b",
  measurementId: "G-ZPD2EVZX9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);