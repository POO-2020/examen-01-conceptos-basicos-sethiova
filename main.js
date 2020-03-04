import Huesped from "./huesped.js"
import Reservacion from "./reservacion.js"
import Hotel from "./hotel.js"

class Main {
    constructor() {
        this.hotel = new Hotel("Las Brisas")
    }

   prueba() {
        let reservacion1 = new Reservacion(1234, new Date(2003,4,23), 5) 
        let huesped1 = new Huesped("Jose Manuel Alcantar", "Masculino")
        let huesped2 = new Huesped("Maria Regina Mariel", "Femenino")
        reservacion1.addHuesped(huesped1)
        reservacion1.addHuesped(huesped2)
        this.hotel.addReservacion(reservacion1)
        let reservacion2 = new Reservacion(1222, new Date(2005,6,13), 5) 
        let huesped3 = new Huesped("Alan Ugarte Saucedo", "Masculino")
        let huesped4 = new Huesped("Daniela Covarrubias Mendoza", "Femenino")
        reservacion2.addHuesped(huesped3)
        reservacion2.addHuesped(huesped4)
        this.hotel.addReservacion(reservacion2)
        this.hotel.printHotel()
    }    
}


let app = new Main
console.log(app.prueba())
