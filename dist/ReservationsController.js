import { Reservation } from "./Reservations.js";
import { UserController } from "./userController.js";
document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = UserController.getLoggedInUser();
    if (!loggedInUser || !loggedInUser.isAdmin) {
        alert("Access denied. This page is for admins only.");
        window.location.href = "MainPage.html";
        return;
    }
    const reservationsList = document.getElementById("reservations-list");
    function renderReservations() {
        const reservations = Reservation.loadReservations();
        reservationsList.innerHTML = "";
        reservations.forEach((reservation) => {
            const listItem = document.createElement("li");
            listItem.classList.add("reservation-item");
            listItem.innerHTML = `
                <div>
                    <strong>${reservation.userName}</strong> (${reservation.userEmail})
                </div>
                <div>
                    Date: ${reservation.date} | Time: ${reservation.time} | Guests: ${reservation.guests}
                </div>
                <div>
                    Seating: ${reservation.seating} | Table: ${reservation.table}
                </div>
                <button class="delete-btn" data-id="${reservation.id}">Delete</button>
            `;
            reservationsList.appendChild(listItem);
        });
        addDeleteEventListeners();
    }
    function addDeleteEventListeners() {
        document.querySelectorAll(".delete-btn").forEach((button) => {
            button.addEventListener("click", (event) => {
                const reservationId = event.target.getAttribute("data-id");
                if (reservationId) {
                    deleteReservation(reservationId);
                }
            });
        });
    }
    function deleteReservation(reservationId) {
        let reservations = Reservation.loadReservations();
        reservations = reservations.filter(res => res.id !== reservationId);
        localStorage.setItem("reservations", JSON.stringify(reservations));
        renderReservations();
    }
    document.getElementById("logout-btn")?.addEventListener("click", () => {
        UserController.logout();
        window.location.href = "login.html";
    });
    renderReservations();
});
