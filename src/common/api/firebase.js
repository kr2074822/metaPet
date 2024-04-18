// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // 추가
import {getAuth} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAnuUENubkzfLbht2vefSTBWMxDTZ3YqFQ",
  authDomain: "metapet-a77a3.firebaseapp.com",
  projectId: "metapet-a77a3",
  storageBucket: "metapet-a77a3.appspot.com",
  messagingSenderId: "159096077738",
  appId: "1:159096077738:web:825b39b1b2492d9b917fd3",
  measurementId: "G-YTQLFZFS0L",
  databaseURL: "https://metapet-a77a3-default-rtdb.firebaseio.com/",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app); // 추가
export const authService = getAuth()