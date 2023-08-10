// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCtE3ZVQeF2Ht-EB_vi8kNhcsC2A5k3tc",
  authDomain: "social-media-web-fd460.firebaseapp.com",
  projectId: "social-media-web-fd460",
  storageBucket: "social-media-web-fd460.appspot.com",
  messagingSenderId: "810536249155",
  appId: "1:810536249155:web:05b5f23fa09444cfe8b1f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
