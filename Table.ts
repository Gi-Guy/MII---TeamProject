//  import { Reservations } from "./Reservations.js"; 

interface ReservationsDataList  {
  table: any | "";
  seating: any | "";
  guests: any | "";
  time: any | "";
  date: any | "";
}

const reservationsList = document.getElementById('reservations-list');
localStorage.getItem("reservationData");
const reservation: ReservationsDataList [] = JSON.parse(localStorage.getItem("reservationData") || "[]");

document.getElementById('reservationForm')!.onsubmit = function (e) {
  e.preventDefault();
  
  const item = document.createElement('div');
  const date = (document.getElementById("reservation-date") as HTMLInputElement).value;
  const time = (document.getElementById("reservation-time") as HTMLInputElement).value;
  const guests = (document.getElementById("guests") as HTMLInputElement).value;
  const seating = (document.querySelector('input[name="seating"]:checked') as HTMLInputElement).value;
  const table = (document.querySelector('input[name="table"]:checked') as HTMLInputElement).value;
  const newReservation: ReservationsDataList = { date, time, guests, seating, table };

   reservation.forEach(NewRes => {
    item.innerText = ` ${NewRes.date} at ${NewRes.time} ,  ${NewRes.guests} , ${NewRes.seating} , ${NewRes.table}`;
    reservationsList!.appendChild(item);
    reservation.push(newReservation);
  });
};