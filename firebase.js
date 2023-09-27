import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj20OU152WIHfBqvouc0mwKmZaHooxZgA",
  authDomain: "food-delivery-app-75f4d.firebaseapp.com",
  projectId: "food-delivery-app-75f4d",
  storageBucket: "food-delivery-app-75f4d.appspot.com",
  messagingSenderId: "663911665271",
  appId: "1:663911665271:web:016b1e6603b2386bc08072",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
