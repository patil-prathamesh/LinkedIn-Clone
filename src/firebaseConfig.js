// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhV-vWz-8W4whhC0of4PscErfUysFYxuY",
    authDomain: "linkedin-clone-173be.firebaseapp.com",
    projectId: "linkedin-clone-173be",
    storageBucket: "linkedin-clone-173be.appspot.com",
    messagingSenderId: "957534038731",
    appId: "1:957534038731:web:1c82c37a3f492bc09d894e",
    measurementId: "G-DL31W4KT1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
