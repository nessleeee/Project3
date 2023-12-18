// firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY_RjqVyMChJ1V-eUfugwugib97LLbXR4",
  authDomain: "igraliste-35324.firebaseapp.com",
  databaseURL: "https://igraliste-35324-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "igraliste-35324",
  storageBucket: "igraliste-35324.appspot.com",
  messagingSenderId: "565015585284",
  appId: "1:565015585284:web:7fa34c4a0b2a1e46340b51",
  measurementId: "G-796YDCSVQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);