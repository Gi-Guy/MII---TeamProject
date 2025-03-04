import { UserController } from "./userController.js";
import { Reservation } from "./Reservations.js";

// Login and Register pages
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form") as HTMLFormElement | null;
    const loginForm = document.getElementById("login-form") as HTMLFormElement | null;
    const errorMessage = document.getElementById("error-message") as HTMLParagraphElement | null;
    const signUpButton = document.getElementById("sign-up-button") as HTMLButtonElement | null;

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = (document.getElementById("email") as HTMLInputElement).value;
            const password = (document.getElementById("password") as HTMLInputElement).value;

            const user = UserController.login(email, password);
            if (user) {
                alert(`Welcome back, ${user.name}!`);
                window.location.href = user.isAdmin ? "admin.html" : "MainPage.html";
            } else {
                if (errorMessage) {
                    errorMessage.style.display = "block";
                }
            }
        });
    }

    if (signUpButton) {
        signUpButton.addEventListener("click", () => {
            window.location.href = "register.html";
        });
    }

    if (!registerForm) {
        console.warn("register-form not found on this page.");
        return;
    }else{
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
    }
});

// Reservation page
document.addEventListener("DOMContentLoaded", () => {
    
    const reservationForm = document.getElementById("reservationForm") as HTMLFormElement | null;

    if (reservationForm) {
        reservationForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const loggedInUser = UserController.getLoggedInUser();
            if (!loggedInUser) {
                alert("You must be logged in to make a reservation.");
                return;
            }

            const date = (document.getElementById("reservation-date") as HTMLInputElement).value;
            const time = (document.getElementById("reservation-time") as HTMLInputElement).value;
            const guests = parseInt((document.getElementById("guests") as HTMLInputElement).value);
            const seating = (document.querySelector('input[name="seating"]:checked') as HTMLInputElement).value;
            const table = (document.querySelector('input[name="table"]:checked') as HTMLInputElement).value;

            const newReservation = new Reservation(date, time, guests, seating, table);
            newReservation.save();

            console.log("📌 Reservation added:", newReservation);
            console.log("📌 All Reservations:", Reservation.getReservations());

            alert(`Reservation added successfully for ${loggedInUser.name}!`);
            reservationForm.reset();
        });
    }
});
//TESITNG
document.addEventListener("DOMContentLoaded", () => {
    console.log("Loading users from localStorage...");

    UserController.loadUsers();

    console.log("Users:", UserController.getUsers());
    console.log("Admins:", UserController.getAdmins());
});
