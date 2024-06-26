// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNCGQmi-_cDl9geLxruSKQg9fI3wYlhHQ",
  authDomain: "cs4800-bae3c.firebaseapp.com",
  databaseURL: "https://cs4800-bae3c-default-rtdb.firebaseio.com",
  projectId: "cs4800-bae3c",
  storageBucket: "cs4800-bae3c.appspot.com",
  messagingSenderId: "270320823310",
  appId: "1:270320823310:web:f900d5b1430e2fa653e05f",
  measurementId: "G-KR5QTW7X7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);