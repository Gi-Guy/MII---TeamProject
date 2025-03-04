export class Reservation {
    id: string;
    date: string;
    time: string;
    guests: number;
    seating: string;
    table: string;

    private static RESERVATIONS_STORAGE_KEY = "reservations";
    private static reservations: Reservation[] = Reservation.loadReservations();

    constructor(date: string, time: string, guests: number, seating: string, table: string) {
        this.id = `res-${Date.now()}`;
        this.date = date;
        this.time = time;
        this.guests = guests;
        this.seating = seating;
        this.table = table;
    }

    save(): void {
        Reservation.reservations.push(this);
        Reservation.saveReservations();
        console.log("✅ New reservation added:", this);
    }

    static loadReservations(): Reservation[] {
        const reservationsData = localStorage.getItem(Reservation.RESERVATIONS_STORAGE_KEY);
        return reservationsData ? JSON.parse(reservationsData) : [];
    }

    static saveReservations(): void {
        localStorage.setItem(Reservation.RESERVATIONS_STORAGE_KEY, JSON.stringify(Reservation.reservations));
    }


    static getReservations(): Reservation[] {
        return Reservation.reservations;
    }

    static getAllReservations(): Reservation[] {
        return Reservation.getReservations(); 
    }
}

// TESTING
console.log("Loaded Reservations:", Reservation.getAllReservations());
