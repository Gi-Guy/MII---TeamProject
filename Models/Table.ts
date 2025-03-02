export  interface Tablereservation {
        id:  "tables-outside" | "tables-inside" | "tables-bar"
        timeSlots: { time: string; reserved: boolean }[];
    }
    

    
 