import { Reservation } from "./Reservations.js";
import { UserController } from "./userController.js";

document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = UserController.getLoggedInUser();
    if (!loggedInUser || !loggedInUser.isAdmin) {
        alert("Access denied. This page is for admins only.");
        window.location.href = "MainPage.html";
        return;
    }

    const reservationsList = document.getElementById("reservations-list") as HTMLUListElement;

    function renderReservations() {
        const reservations = Reservation.loadReservations();
        reservationsList.innerHTML = "";

        reservations.forEach((reservation) => {
            const listItem = document.createElement("li");
            listItem.classList.add("reservation-item");

            listItem.innerHTML = `
                <div>
                    <strong>${reservation.userName}</strong> (${reservation.userEmail})
                </div>
                <div>
                    Date: ${reservation.date} | Time: ${reservation.time} | Guests: ${reservation.guests}
                </div>
                <div>
                    Seating: ${reservation.seating} | Table: ${reservation.table}
                </div>
                <button class="delete-btn" data-id="${reservation.id}">Delete</button>
                <button class="change-btn" data-id="${reservation.id}">Change</button>
            `;

            reservationsList.appendChild(listItem);
        });

        addDeleteEventListeners();
        addChangesEventListeners() 
    }

    function addDeleteEventListeners() {
        document.querySelectorAll(".delete-btn").forEach((button) => {
            button.addEventListener("click", (event) => {
                const reservationId = (event.target as HTMLButtonElement).getAttribute("data-id");
                if (reservationId) {
                    deleteReservation(reservationId);
                }
            });
        });
    }

    function deleteReservation(reservationId: string) {
        let reservations = Reservation.loadReservations();
        reservations = reservations.filter(res => res.id !== reservationId);
        localStorage.setItem("reservations", JSON.stringify(reservations));

        renderReservations();
    }

    
    function addChangesEventListeners() {
        document.querySelectorAll(".change-btn").forEach((button) => {
            button.addEventListener("click", (event) => {
                const reservationId = (event.target as HTMLButtonElement).getAttribute("data-id");
                if (reservationId) {
                    openChangeReservationModal(reservationId);
                }
            });
        });
    }

     
    function openChangeReservationModal(reservationId: string) {
         let reservation = Reservation.loadReservations().find(r => r.id === reservationId);
        if (!reservation) return;

         const modal = document.createElement("div");
         modal.classList.add("modal");

        modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Change Reservation</h2>
            <input type="text" id="username" value="${reservation.userName}" />
            <input type="email" id="useremail" value="${reservation.userEmail}" />
            <input type="date" id="date" value="${reservation.date}" />
            <input type="time" id="time" value="${reservation.time}" />
            <input type="number" id="guests" value="${reservation.guests}" min="1" />
            <select id="seating">
                <option value="inside" ${reservation.seating === 'inside' ? 'selected' : ''}>Inside</option>
                <option value="outside" ${reservation.seating === 'outside' ? 'selected' : ''}>Outside</option>
                <option value="bar" ${reservation.seating === 'bar' ? 'selected' : ''}>Bar</option>
            </select>
            <select id="table">
                <option value="1" ${reservation.table === '1' ? 'selected' : ''}>1</option>
                <option value="2" ${reservation.table === '2' ? 'selected' : ''}>2</option>
                <option value="3" ${reservation.table === '3' ? 'selected' : ''}>3</option>
                <option value="4" ${reservation.table === '4' ? 'selected' : ''}>4</option>
            </select>
            <button id="save-changes">Save Changes</button>
        </div>
       `;

       document.body.appendChild(modal);
    
     
      modal.querySelector(".close-btn")?.addEventListener("click", () => {
        modal.remove();
       });

      modal.querySelector("#save-changes")?.addEventListener("click", () => {
        const updatedReservation = {
            id: reservation.id,
            userName: (modal.querySelector("#username") as HTMLInputElement).value,
            userEmail: (modal.querySelector("#useremail") as HTMLInputElement).value,
            date: (modal.querySelector("#date") as HTMLInputElement).value,
            time: (modal.querySelector("#time") as HTMLInputElement).value,
            guests: parseInt((modal.querySelector("#guests") as HTMLInputElement).value, 10),
            seating: (modal.querySelector("#seating") as HTMLSelectElement).value,
            table: parseInt((modal.querySelector("#table") as HTMLSelectElement).value, 10),
        };
        updateReservation(updatedReservation);
        modal.remove();
        renderReservations(); 
       });
     }

      function updateReservation(updatedReservation: any) {
         const reservations = Reservation.loadReservations();
         const index = reservations.findIndex(res => res.id === updatedReservation.id);
         if (index !== -1) {
            reservations[index] = updatedReservation;
            localStorage.setItem("reservations", JSON.stringify(reservations));
            }
     }

    document.getElementById("logout-btn")?.addEventListener("click", () => {
        UserController.logout();
        window.location.href = "login.html";
    });

    renderReservations();
});


