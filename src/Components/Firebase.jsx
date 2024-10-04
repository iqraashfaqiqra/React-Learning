// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyxp_MwRyOtY181eiykqJd__kBocL47QI",
  authDomain: "learning-670e2.firebaseapp.com",
  databaseURL: "https://learning-670e2-default-rtdb.firebaseio.com",
  projectId: "learning-670e2",
  storageBucket: "learning-670e2.appspot.com",
  messagingSenderId: "202362612206",
  appId: "1:202362612206:web:0117716786fb78fe10c6ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;