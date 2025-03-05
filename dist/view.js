import { UserController } from "./userController.js";
import { Reservation } from "./Reservations.js";
// Login and Register pages
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const signUpButton = document.getElementById("sign-up-button");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const user = UserController.login(email, password);
            if (user) {
                alert(`Welcome back, ${user.name}!`);
                // window.location.href = user.isAdmin ? "ReservedTables.html" : "MainPage.html";
                window.location.href = user.isAdmin ? "MainPage.html" : "MainPage.html";
            }
            else {
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
    }
    else {
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
    }
});
// Reservation page
document.addEventListener("DOMContentLoaded", () => {
    const reservationForm = document.getElementById("reservationForm");
    if (reservationForm) {
        reservationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const loggedInUser = UserController.getLoggedInUser();
            if (!loggedInUser) {
                alert("You must be logged in to make a reservation.");
                return;
            }
            const date = document.getElementById("reservation-date").value;
            const time = document.getElementById("reservation-time").value;
            const guests = parseInt(document.getElementById("guests").value);
            const seating = document.querySelector('input[name="seating"]:checked').value;
            const table = document.querySelector('input[name="table"]:checked').value;
            const newReservation = new Reservation(date, time, guests, seating, table);
            newReservation.save();
            // Logging for testing purposes
            console.log("Reservation added:", newReservation);
            console.log("All Reservations:", Reservation.getReservations());
            alert(`Reservation added successfully for ${loggedInUser.name}!`);
            reservationForm.reset();
            // Redirect to MainPage.html after reservation
            window.location.href = "MainPage.html";
        });
    }
});
//Logout button
document.addEventListener("DOMContentLoaded", () => {
    const exitButton = document.getElementById("exit-btn");
    if (exitButton) {
        exitButton.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "login.html";
        });
    }
});
// buttons only for admins
document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = UserController.getLoggedInUser();
    const optionsButton = document.getElementById("options-btn");
    const tabelsButton = document.getElementById("tabels-btn");
    const usersButton = document.getElementById("user-mn-btn");
    if (loggedInUser && loggedInUser.isAdmin) {
        if (optionsButton && tabelsButton && usersButton) {
            optionsButton.style.display = "inline-block";
            tabelsButton.style.display = "inline-block";
            usersButton.style.display = "inline-block";
        }
    }
});
//TESITNG
document.addEventListener("DOMContentLoaded", () => {
    console.log("Loading users from localStorage...");
    UserController.loadUsers();
    console.log("Users:", UserController.getUsers());
    console.log("Admins:", UserController.getAdmins());
});
