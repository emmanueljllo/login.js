---

## 🚀 How It Works

1. **index.html**  
   Contains a login form where the user must enter:
   - A valid **Gmail address** (`@gmail.com` domain)
   - A password that matches the allowed user list in `script.js`

2. **script.js**  
   - Verifies the Gmail format.
   - Checks if the user exists in the allowed user list.
   - Validates if the user has permission (`permission: true`).
   - If valid, it stores the logged user in `localStorage` and redirects to `dashboard.html`.

3. **guard.js**  
   - Runs on **dashboard.html**.
   - Checks if a user is stored in `localStorage` and has permission.
   - If not authorized, it redirects back to `index.html` with an alert.

4. **style.css**  
   - Applies a clean, modern style to both the login and dashboard pages.

---

## 📌 Allowed Users (in `script.js`)

```javascript
const allowedUsers = [
  { email: "admin@gmail.com", password: "admin123", permission: true },
  { email: "user@gmail.com", password: "user123", permission: false }
]
