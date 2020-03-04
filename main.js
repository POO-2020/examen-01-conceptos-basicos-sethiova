import Huesped from "./huesped.js"
import Reservacion from "./reservacion.js"
import Hotel from "./hotel.js"

class Main {
    constructor() {
        this.hotel = new Hotel("Las Brisas")
    }

    addReservacion() {
        
        this.hotel.printHotel()
    }    
}


let app = new Main
