// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6b3cEq9g9m87UlIaRee2TrwL9NnToo9E",
  authDomain: "residential-estate--project.firebaseapp.com",
  projectId: "residential-estate--project",
  storageBucket: "residential-estate--project.appspot.com",
  messagingSenderId: "1021538508102",
  appId: "1:1021538508102:web:0daf093d15d90e40449947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth