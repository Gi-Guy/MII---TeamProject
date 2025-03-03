"use strict";

var seatingRadios = document.getElementsByName("seating");
var tableOptionsOutside = document.getElementById("tables-outside");
var tableOptionsInside = document.getElementById("tables-inside");
var tableOptionsBar = document.getElementById("tables-bar");

function updateTableOptions() {
  var selectedSeating = document.querySelector('input[name="seating"]:checked').value;
  tableOptionsOutside.classList.remove("active");
  tableOptionsInside.classList.remove("active");
  tableOptionsBar.classList.remove("active");

  if (selectedSeating === "outside") {
    tableOptionsOutside.classList.add("active");
  } else if (selectedSeating === "inside") {
    tableOptionsInside.classList.add("active");
  } else if (selectedSeating === "bar") {
    tableOptionsBar.classList.add("active");
  }
}

seatingRadios.forEach(function (radio) {
  radio.addEventListener("change", updateTableOptions);
});
updateTableOptions();
var reservationForm = document.getElementById("reservationForm");
reservationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var date = document.getElementById("reservation-date").value;
  var time = document.getElementById("reservation-time").value;
  var guests = document.getElementById("guests").value;
  var seating = document.querySelector('input[name="seating"]:checked').value;
  var table = document.querySelector('input[name="table"]:checked').value;
  var reservationData = {
    date: date,
    time: time,
    guests: guests,
    seating: seating,
    table: table
  };
  localStorage.setItem("reservationData", JSON.stringify(reservationData));
  window.location.href = "MainPage.html";
});