// src.firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDbIP108pZT_VctT_G6KzSlh7TVnhNY-AM",
  authDomain: "clionlandingpage.firebaseapp.com",
  projectId: "clionlandingpage",
  storageBucket: "clionlandingpage.appspot.com",
  messagingSenderId: "575184632086",
  appId: "1:575184632086:web:57b5ec4d652ff71ac6f837",
}

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
