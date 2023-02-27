import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

export const firebaseConfig = {
  apiKey: "AIzaSyD_MyHayY3TH40QCqdpgz42cNggfAyulls",
  authDomain: "eshop-9dd9f.firebaseapp.com",
  projectId: "eshop-9dd9f",
  storageBucket: "eshop-9dd9f.appspot.com",
  messagingSenderId: "530248232807",
  appId: "1:530248232807:web:c4d60e16415147cbc7c9c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;