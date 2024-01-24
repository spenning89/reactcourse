// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1uWxtyVgRldoJB_ojfguL9gyaZhZqg8w",
  authDomain: "react-course-a5e42.firebaseapp.com",
  projectId: "react-course-a5e42",
  storageBucket: "react-course-a5e42.appspot.com",
  messagingSenderId: "325068967284",
  appId: "1:325068967284:web:0ed2c3cd2b14241f99b021",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
