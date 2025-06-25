// Guard: redirect if user is not authorized
const user = JSON.parse(localStorage.getItem("loggedUser"));

if (!user || !user.permission) {
  alert("You are not authorized to access this page.");
  window.location.href = "index.html";
}