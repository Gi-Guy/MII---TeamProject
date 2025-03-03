import * as Reservations from "./Reservations.js";
const reservationForm = document.getElementById('reservationForm') as HTMLFormElement;
const reservationsList = document.getElementById('reservations') as HTMLUListElement;
const errorMessage = document.getElementById('error-message') as HTMLDivElement;

//  code for reservation function needed (based on reservation.ts)

function updateReservationList() {
  reservationsList.innerHTML = '';
  .forEach(() => {
    const listItem = document.createElement('li');
    listItem.textContent = //*
    reservationsList.appendChild(listItem);
  });
}

function setError(message: string) {
  errorMessage.textContent = message;
}

function clearError() {
  errorMessage.textContent = '';
}



    
 