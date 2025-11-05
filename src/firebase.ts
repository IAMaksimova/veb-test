import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSr-OqbYxHVKfMs27HsZavB9fmwMF_jY4",
    authDomain: "internship-app-3313e.firebaseapp.com",
    projectId: "internship-app-3313e",
    storageBucket: "internship-app-3313e.firebasestorage.app",
    messagingSenderId: "208803540865",
    appId: "1:208803540865:web:43ff59cd5355edb3548280",
    measurementId: "G-5VH9B1WRCP"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);