import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

initializeApp({
  apiKey: "AIzaSyCrMSXUD3XPnlxakwXkYUnngyEfmusJ1sc",
  authDomain: "cv-form-cv.firebaseapp.com",
  projectId: "cv-form-cv",
  storageBucket: "cv-form-cv.appspot.com",
  messagingSenderId: "254784420060",
  appId: "1:254784420060:web:d400bc9c4acb08ef555c19",
  measurementId: "G-817C7D5R4S",
});
function initFirebaseAuth() {
  onAuthStateChanged(getAuth(), authStateObserver);
}

function authStateObserver(user) {
  console.log(user);
}

initFirebaseAuth();
