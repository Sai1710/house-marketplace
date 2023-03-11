// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpeAplWBvBq2WKnneWfbfVH9l6bI-Sb8s",
  authDomain: "house-marketplace-app-10dfc.firebaseapp.com",
  projectId: "house-marketplace-app-10dfc",
  storageBucket: "house-marketplace-app-10dfc.appspot.com",
  messagingSenderId: "1095858518783",
  appId: "1:1095858518783:web:07c13f7b1673222bf92aca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
