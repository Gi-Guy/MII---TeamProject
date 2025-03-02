"use strict";

exports.__esModule = true;
exports.Reservations = void 0;

var Reservations =
/** @class */
function () {
  function Reservations() {}

  return Reservations;
}();

exports.Reservations = Reservations;
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