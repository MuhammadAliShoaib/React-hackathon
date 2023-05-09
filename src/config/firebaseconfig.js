// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkpi0h77hbpopFA3rrs5ztA8vV5IYuksY",
  authDomain: "react-form-c5fa1.firebaseapp.com",
  databaseURL: "https://react-form-c5fa1-default-rtdb.firebaseio.com",
  projectId: "react-form-c5fa1",
  storageBucket: "react-form-c5fa1.appspot.com",
  messagingSenderId: "645847815610",
  appId: "1:645847815610:web:6422258890f2ff09f47983",
  measurementId: "G-54Q3R5HCNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;