// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdEZvhB-oIHDmfW4G0j7i1opuY_BeR_78",
  authDomain: "bachkhoatech-dadc1.firebaseapp.com",
  databaseURL: "https://bachkhoatech-dadc1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bachkhoatech-dadc1",
  storageBucket: "bachkhoatech-dadc1.appspot.com",
  messagingSenderId: "851910083579",
  appId: "1:851910083579:web:37c2837b81dd49683b415e",
  measurementId: "G-C8444ZH2QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { auth, analytics, db, storage };