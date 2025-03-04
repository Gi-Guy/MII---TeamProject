"use strict";

var _Reservations = require("./Reservations.js");

var reservationForm = document.getElementById('reservationForm');
var reservationsList = document.getElementById('reservations');
var errorMessage = document.getElementById('error-message'); //  code for reservation function needed (based on reservation.ts)

function updateReservationList() {
  reservationsList.innerHTML = '';

  var reservationsArray = _Reservations.Reservations.getAll();

  reservationsArray.forEach(function (reservation) {
    var listItem = document.createElement('li');
    listItem.textContent = reservation.toString(); // Assign a string value

    reservationsList.appendChild(listItem);
  });
}