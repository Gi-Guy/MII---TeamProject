//  import { Reservations } from "./Reservations.js"; 
const reservationsList = document.getElementById('reservations-list');
localStorage.getItem("reservationData");
const reservation = JSON.parse(localStorage.getItem("reservationData") || "[]");
document.getElementById('reservationForm').onsubmit = function (e) {
    e.preventDefault();
    const item = document.createElement('div');
    const date = document.getElementById("reservation-date").value;
    const time = document.getElementById("reservation-time").value;
    const guests = document.getElementById("guests").value;
    const seating = document.querySelector('input[name="seating"]:checked').value;
    const table = document.querySelector('input[name="table"]:checked').value;
    const newReservation = { date, time, guests, seating, table };
    reservation.forEach(NewRes => {
        item.innerText = ` ${NewRes.date} at ${NewRes.time} ,  ${NewRes.guests} , ${NewRes.seating} , ${NewRes.table}`;
        reservationsList.appendChild(item);
        reservation.push(newReservation);
    });
};
