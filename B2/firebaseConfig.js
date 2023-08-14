import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAiVoFGiUQDzp4sYLH2VqC1Ug9-KnEZXwk",
  authDomain: "jsitt-b3b67.firebaseapp.com",
  projectId: "jsitt-b3b67",
  storageBucket: "jsitt-b3b67.appspot.com",
  messagingSenderId: "274822024925",
  appId: "1:274822024925:web:3374e7541d4b412512d534",
  measurementId: "G-X6KG75B5QC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log(auth);

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

export const signInUser = (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      alert("Dang nhap thanh cong");
      location.href = "TC.html";
      localStorage.setItem("signInUser", true);
    })
    .catch((error) => {
      alert("Dang nhap that bai");
      console.log(error.code);
    });
};
