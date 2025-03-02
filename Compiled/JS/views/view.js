import { UserController } from "../Controllers/userController.js";
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const isAdmin = document.getElementById("is-admin").checked;
            const user = UserController.addNewUser(name, email, password, isAdmin);
            if (user) {
                alert("Success!");
                window.location.href = "login.html";
            }
            else {
                alert("Email already exists!");
            }
        });
    }
});
