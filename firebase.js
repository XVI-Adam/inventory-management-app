// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCGLBItaofxYTB9mDiI1J5cr3IxfEMrSg",
  authDomain: "inventory-management-app-444ca.firebaseapp.com",
  projectId: "inventory-management-app-444ca",
  storageBucket: "inventory-management-app-444ca.firebasestorage.app",
  messagingSenderId: "706496253996",
  appId: "1:706496253996:web:a0519299f259ffb91f8189",
  measurementId: "G-P7DRGQHVFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);