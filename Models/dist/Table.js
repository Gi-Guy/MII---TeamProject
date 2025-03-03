"use strict";
exports.__esModule = true;
var Reservations_js_1 = require("./Reservations.js");
var reservationForm = document.getElementById('reservationForm');
var reservationsList = document.getElementById('reservations');
var errorMessage = document.getElementById('error-message');
//  code for reservation function needed (based on reservation.ts)
function updateReservationList() {
    reservationsList.innerHTML = '';
    var reservationsArray = Reservations_js_1.Reservations.getAll();
    reservationsArray.forEach(function (reservation) {
        var listItem = document.createElement('li');
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
