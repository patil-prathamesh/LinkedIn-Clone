// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDREPzNBT8H4a-NL_PTbvGil7ATa1DC3Ik",
    authDomain: "li-clone-da485.firebaseapp.com",
    projectId: "li-clone-da485",
    storageBucket: "li-clone-da485.appspot.com",
    messagingSenderId: "309534164229",
    appId: "1:309534164229:web:a7c6bb068770254de7a36c",
    measurementId: "G-97QBZ2WQ8D"
  };
// const firebaseConfig = {
//     apiKey: "AIzaSyATjaAVIczBmJVbGPoPH2yB-YB_a4oMZPs",
//     authDomain: "l-clone-e559d.firebaseapp.com",
//     projectId: "l-clone-e559d",
//     storageBucket: "l-clone-e559d.appspot.com",
//     messagingSenderId: "943612433961",
//     appId: "1:943612433961:web:bdb5bb44cb58c405cb6e38",
//     measurementId: "G-1DWFPVE4C6"
//   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
