// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATgX2vL8NxQcT1McYxPAcLU_88LRSx98Q",
    authDomain: "esports-event-management.firebaseapp.com",
    projectId: "esports-event-management",
    storageBucket: "esports-event-management.appspot.com",
    messagingSenderId: "1049521753621",
    appId: "1:1049521753621:web:2a3f9a716787308a65881c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;