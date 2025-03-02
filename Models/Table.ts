import * as Reservations from "./Reservations.js";

const reservationForm = document.getElementById('reservationForm') as HTMLFormElement;
const reservationsList = document.getElementById('reservations') as HTMLUListElement;
const errorMessage = document.getElementById('error-message') as HTMLDivElement;


const reservations: { date: string; time: string; guests: number; selectedSeating: string; }[] = [];

export function manageReservations(event: Event) {
  event.preventDefault();
  clearError();

  const date = (document.getElementById('reservation-date') as HTMLInputElement).value;
  const time = (document.getElementById('reservation-time') as HTMLSelectElement).value;
  const guests = parseInt((document.getElementById('guests') as HTMLInputElement).value);
  const selectedSeating = (document.querySelector('input[name="seating"]:checked') as HTMLInputElement).value;


  // Check if the date and time are already booked
  const existingReservation = reservations.some(res =>
    res.date === date && res.time === time);
  
  if (existingReservation) {
    setError('This time slot is already booked.');
    return;
  }

  const reservation = { date, time, guests, selectedSeating };
  reservations.push(reservation);
  updateReservationList();
  reservationForm.reset();
}

function updateReservationList() {
  reservationsList.innerHTML = '';
  reservations.forEach((res) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${res.date} - ${res.time} - ${res.guests} guests - ${res.selectedSeating}`;
    reservationsList.appendChild(listItem);
  });
}

function setError(message: string) {
  errorMessage.textContent = message;
}

function clearError() {
  errorMessage.textContent = '';
}

reservationForm.addEventListener('submit', manageReservations);

    
 