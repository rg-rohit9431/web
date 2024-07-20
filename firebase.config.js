// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHsQawQu91V-_49ggfSTxcumh1pSHRTzs",
    authDomain: "snackbae-web.firebaseapp.com",
    projectId: "snackbae-web",
    storageBucket: "snackbae-web.appspot.com",
    messagingSenderId: "248204991141",
    appId: "1:248204991141:web:3752b76832e6afcb6a4b4c",
    measurementId: "G-ZJQGJM2W5B"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);