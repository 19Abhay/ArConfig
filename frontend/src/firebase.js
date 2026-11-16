// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF-0hp-cbQZwCYUgp4FhsEBwqPCaWDesA",
  authDomain: "arconfiq.firebaseapp.com",
  projectId: "arconfiq",
  storageBucket: "arconfiq.firebasestorage.app",
  messagingSenderId: "570315192588",
  appId: "1:570315192588:web:eb0c996624f25925e53129",
  measurementId: "G-PMCP99GPS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
