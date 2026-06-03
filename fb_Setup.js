// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtuw4Mq8x_rZoVNdub2uOe3nmEU2kuHTM",
  authDomain: "gamescores-d64fc.firebaseapp.com",
  databaseURL: "https://gamescores-d64fc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gamescores-d64fc",
  storageBucket: "gamescores-d64fc.firebasestorage.app",
  messagingSenderId: "428921323223",
  appId: "1:428921323223:web:8b3ce44d84e89db8a17a92",
  measurementId: "G-EC3LKSX1J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);