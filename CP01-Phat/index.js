import { auth, createUser } from "./firebaseConfig.js";
console.log(auth);
const Login = document.querySelector("#btn");
Login.addEventListener("click", function () {
  const email = document.querySelector("#form3Example3").value;
  const pass = document.querySelector("#form3Example4").value;
  createUser(auth, email, pass);
});
