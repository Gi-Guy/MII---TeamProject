let Reservation = /** @class */ (() => {
    class Reservation {
        constructor(date, time, guests, seating, table) {
            this.id = `res-${Date.now()}`;
            this.date = date;
            this.time = time;
            this.guests = guests;
            this.seating = seating;
            this.table = table;
        }
        save() {
            Reservation.reservations.push(this);
            Reservation.saveReservations();
            console.log("✅ New reservation added:", this);
        }
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
        static getAllReservations() {
            return Reservation.getReservations();
        }
    }
    Reservation.RESERVATIONS_STORAGE_KEY = "reservations";
    Reservation.reservations = Reservation.loadReservations();
    return Reservation;
})();
export { Reservation };
// TESTING
console.log("Loaded Reservations:", Reservation.getAllReservations());
