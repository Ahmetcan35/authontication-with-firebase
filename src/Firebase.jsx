
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDBN95gR6BhNCX5rtvwYBv8QgzIY-yZHbc",
    authDomain: "fir-project-c4f64.firebaseapp.com",
    projectId: "fir-project-c4f64",
    storageBucket: "fir-project-c4f64.appspot.com",
    messagingSenderId: "93356685287",
    appId: "1:93356685287:web:50b98a2aa60fd87da82f42"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);