import { Reservations } from "./Reservations.js";
const reservationForm = document.getElementById('reservationForm');
const reservationsList = document.getElementById('reservations');
const errorMessage = document.getElementById('error-message');
//  code for reservation function needed (based on reservation.ts)
function updateReservationList() {
    reservationsList.innerHTML = '';
    const reservationsArray = Reservations.getAll();
    reservationsArray.forEach((reservation) => {
        const listItem = document.createElement('li');
        listItem.textContent = reservation.toString(); // Assign a string value
        reservationsList.appendChild(listItem);
    });
}
function setError(message) {
    errorMessage.textContent = message;
}
function clearError() {
    errorMessage.textContent = '';
}
