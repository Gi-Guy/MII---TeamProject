import { UserController } from "./userController.js";
let Reservation = /** @class */ (() => {
    class Reservation {
        constructor(date, time, guests, seating, table) {
            const loggedInUser = UserController.getLoggedInUser();
            if (!loggedInUser) {
                throw new Error("No logged-in user found. Cannot create reservation.");
            }
            this.id = `res-${Date.now()}`;
            this.date = date;
            this.time = time;
            this.guests = guests;
            this.seating = seating;
            this.table = table;
            this.userName = loggedInUser.name;
            this.userEmail = loggedInUser.email;
        }
        save() {
            Reservation.reservations.push(this);
            Reservation.saveReservations();
            console.log("✅ New reservation added:", this);
        }
        // save(): void {
        //     const reservations = Reservation.getReservations();
        //     const isTableTaken = reservations.some(res =>
        //         res.date === this.date && res.time === this.time && res.table === this.table
        //     );
        //     if (isTableTaken) {
        //         alert("This table is already booked for the selected date and time.");
        //         return;
        //     }
        //     reservations.push(this);
        //     Reservation.saveReservations();
        //     console.log("✅ New reservation added:", this);
        // }
        static loadReservations() {
            const reservationsData = localStorage.getItem(Reservation.RESERVATIONS_STORAGE_KEY);
            return reservationsData ? JSON.parse(reservationsData) : [];
        }
        static saveReservations() {
            localStorage.setItem(Reservation.RESERVATIONS_STORAGE_KEY, JSON.stringify(Reservation.reservations));
        }
        static getReservations() {
            return Reservation.reservations;
        }
    }
    Reservation.RESERVATIONS_STORAGE_KEY = "reservations";
    Reservation.reservations = Reservation.loadReservations();
    return Reservation;
})();
export { Reservation };
console.log("Loaded Reservations:", Reservation.getReservations());
