// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIKRxutt09DE6ed3XWAo-eotB8_hUSsb8",
  authDomain: "fexchange.firebaseapp.com",
  projectId: "fexchange",
  storageBucket: "fexchange.appspot.com",
  messagingSenderId: "565988690909",
  appId: "1:565988690909:web:b9e284f5306ec94147c434",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
