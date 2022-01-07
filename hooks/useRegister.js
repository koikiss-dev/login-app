import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { auth } from "../services/firebaseApp";
const db = getFirestore();
const providerGoogle = new GoogleAuthProvider();
const useRegister = () => {
  const [user, setUser] = useState(null);
  const [register, setRegister] = useState(false);
  const handleRegister = () => {
    signInWithPopup(auth, providerGoogle)
      .then(({ user }) => {
        console.log("registrado");
        setUser(user.displayName);
        setRegister(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLoginEmail = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log({ user });
        setRegister(true);
        setUser(user.email);
      })
      .catch((error) => {
        console.log(error);
      });
    /* const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    }); */
  };

  return [handleRegister, handleLoginEmail, user, register];
};

export default useRegister;
