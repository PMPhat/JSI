import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBRzEZXZ6FwNU9x56Lt3q4u2JK8NTOIcrg",
  authDomain: "cp01-phat.firebaseapp.com",
  projectId: "cp01-phat",
  storageBucket: "cp01-phat.appspot.com",
  messagingSenderId: "34921688193",
  appId: "1:34921688193:web:c614a19aca730ce3e3b180",
  measurementId: "G-C2X87260KH",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const createUser = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      alert("Dang ky thanh cong");
    })
    .catch((error) => {
      alert("Dang ky that bai");
      console.log(error.code);
    });
};
