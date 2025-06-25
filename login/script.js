// Allowed users list with permissions
const allowedUsers = [
  { email: "admin@gmail.com", password: "admin123", permission: true },
  { email: "user@gmail.com", password: "user123", permission: false }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Verify Gmail domain
  if (!email.endsWith("@gmail.com")) {
    alert("Only Gmail accounts are allowed.");
    return;
  }

  // Check user credentials
  const user = allowedUsers.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid email or password.");
    return;
  }

  if (!user.permission) {
    alert("You do not have permission to access the dashboard.");
    return;
  }

  // Save session data
  localStorage.setItem("loggedUser", JSON.stringify(user));

  // Redirect to dashboard
  window.location.href = "dashboard.html";
});