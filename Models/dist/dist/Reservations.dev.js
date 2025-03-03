"use strict";

// Toggle table options based on seating selection
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
}); // Initialize the table options on page load

updateTableOptions(); // ---- Save data as JSON (in localStorage) and redirect ----

var reservationForm = document.getElementById("reservationForm");
reservationForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  // Gather form data

  var date = document.getElementById("reservation-date").value;
  var time = document.getElementById("reservation-time").value;
  var guests = document.getElementById("guests").value;
  var seating = document.querySelector('input[name="seating"]:checked').value;
  var table = document.querySelector('input[name="table"]:checked').value; // Create a JSON-like object

  var reservationData = {
    date: date,
    time: time,
    guests: guests,
    seating: seating,
    table: table
  }; // Store in localStorage as a JSON string

  localStorage.setItem("reservationData", JSON.stringify(reservationData)); // Redirect to the main page (adjust path if needed)

  window.location.href = "index.html";
});