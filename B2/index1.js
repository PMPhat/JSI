import { auth, createUser } from "./firebaseConfig.js";

const Sign = document.querySelector("#Btn1");
Sign.addEventListener("click", function () {
  const email = document.querySelector("#form3Example3cg").value;
  const pass = document.querySelector("#form3Example4cg").value;

  createUser(auth, email, pass);
});
