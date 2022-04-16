import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcFVpwUiuU219F--DiQgta48miIIaddaU",
  authDomain: "linkedin-clone-b716f.firebaseapp.com",
  projectId: "linkedin-clone-b716f",
  storageBucket: "linkedin-clone-b716f.appspot.com",
  messagingSenderId: "81056096544",
  appId: "1:81056096544:web:bbcbbe341610adb5a1f745",
  measurementId: "G-203M5QXJN7",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };
