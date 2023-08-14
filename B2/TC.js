if (localStorage.getItem("signInUser")) {
  alert("ban da dang nhap");
} else {
  alert("ban chua dang nhap");
  location.href = "index.html";
}
