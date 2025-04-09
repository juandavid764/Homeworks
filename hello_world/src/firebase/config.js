    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm0VJ7QMDSM1nFg9b4Ecy3lnI_OFj7DEQ",
  authDomain: "mi-first-project-416fc.firebaseapp.com",
  projectId: "mi-first-project-416fc",
  storageBucket: "mi-first-project-416fc.firebasestorage.app",
  messagingSenderId: "367809968724",
  appId: "1:367809968724:web:cac2ae496b37ed8e4dcbc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth(app);

export { app, auth };