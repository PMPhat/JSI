import { auth, signInUser } from "./firebaseConfig.js";

const Login = document.querySelector("#btnLogin");
Login.addEventListener("click", function () {
  const email = document.querySelector("#typeEmailX").value;
  const pass = document.querySelector("#typePasswordX").value;
  signInUser(auth, email, pass);
});
