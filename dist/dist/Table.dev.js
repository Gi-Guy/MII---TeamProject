"use strict";

//  import { Reservations } from "./Reservations.js"; 
var reservationsList = document.getElementById('reservations-list');
localStorage.getItem("reservationData");
var reservation = JSON.parse(localStorage.getItem("reservationData") || "[]");

document.getElementById('reservationForm').onsubmit = function (e) {
  e.preventDefault();
  var item = document.createElement('div');
  var date = document.getElementById("reservation-date").value;
  var time = document.getElementById("reservation-time").value;
  var guests = document.getElementById("guests").value;
  var seating = document.querySelector('input[name="seating"]:checked').value;
  var table = document.querySelector('input[name="table"]:checked').value;
  var newReservation = {
    date: date,
    time: time,
    guests: guests,
    seating: seating,
    table: table
  };
  reservation.forEach(function (NewRes) {
    item.innerText = " ".concat(NewRes.date, " at ").concat(NewRes.time, " ,  ").concat(NewRes.guests, " , ").concat(NewRes.seating, " , ").concat(NewRes.table);
    reservationsList.appendChild(item);
    reservation.push(newReservation);
  });
};