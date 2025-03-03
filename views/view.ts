import { UserController } from "../Controllers/userController.js";

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form") as HTMLFormElement;

    if (registerForm){
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = (document.getElementById("name") as HTMLInputElement).value;
            const email = (document.getElementById("email") as HTMLInputElement).value;
            const password = (document.getElementById("password") as HTMLInputElement).value;
            const isAdmin = (document.getElementById("is-admin") as HTMLInputElement).checked;

            const user = UserController.addNewUser(name, email, password, isAdmin);
            if (user) {
                alert("Success!");
                window.location.href = "login.html";
            } else {
                alert("Email already exists!");
            }
        });

    }
});