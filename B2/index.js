import { auth, createUser } from "./firebaseConfig.js";

const Login = document.querySelector("#btnLogin");
Login.addEventListener("click", function () {
  const email = document.querySelector("#typeEmailX").value;
  const pass = document.querySelector("#typePasswordX").value;
  createUser(auth, email, pass);
});
