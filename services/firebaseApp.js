import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7sGuPH95adQ1OJdmOFvYJ1bsSPpt0XXo",
  authDomain: "login-app-102.firebaseapp.com",
  projectId: "login-app-102",
  storageBucket: "login-app-102.appspot.com",
  messagingSenderId: "1019160854393",
  appId: "1:1019160854393:web:e8b8ee94defc823b3cb9a8",
  measurementId: "G-6C6VDEJGL7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
