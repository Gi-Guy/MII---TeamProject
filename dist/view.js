import { UserController } from "./userController.js";
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    if (!registerForm) {
        console.warn("register-form not found on this page.");
        return;
    }
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name")?.value;
        const email = document.getElementById("email")?.value;
        const password = document.getElementById("password")?.value;
        const isAdmin = document.getElementById("is-admin")?.checked;
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }
        const user = UserController.addNewUser(name, email, password, isAdmin);
        if (user) {
            alert("Success! User registered.");
            window.location.href = "login.html";
        }
        else {
            alert("Error: Email already exists.");
        }
    });
});
