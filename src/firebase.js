




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyADOjiJKeOU_3qc6j8O6xgMsKnANMWMVpI",
  authDomain: "login-signup-kartik.firebaseapp.com",
  projectId: "login-signup-kartik",
  storageBucket: "login-signup-kartik.appspot.com",
  messagingSenderId: "1073577635287",
  appId: "1:1073577635287:web:acfb3663fe49907012ef92",
  measurementId: "G-EDP23M9GT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};