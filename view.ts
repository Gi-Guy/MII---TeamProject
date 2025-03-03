import { UserController } from "./userController.js";

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form") as HTMLFormElement | null;

    if (!registerForm) {
        console.warn("register-form not found on this page.");
        return;
    }

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = (document.getElementById("name") as HTMLInputElement)?.value;
        const email = (document.getElementById("email") as HTMLInputElement)?.value;
        const password = (document.getElementById("password") as HTMLInputElement)?.value;
        const isAdmin = (document.getElementById("is-admin") as HTMLInputElement)?.checked;

        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        const user = UserController.addNewUser(name, email, password, isAdmin);
        if (user) {
            alert("Success! User registered.");
            window.location.href = "login.html";
        } else {
            alert("Error: Email already exists.");
        }
    });
});

