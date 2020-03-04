import Huesped from "./huesped.js"
import Reservacion from "./reservacion.js"
export default class Hotel {
    constructor(nombre) {
        this.nombre = nombre
        this.reservaciones = new Array()
    }

    getNumHuespedes2(){
        let x = this.reservaciones.length 
        return x 
    }

    addReservacion(reservacion){
        this.reservaciones.push(reservacion)
    }

    printHotel(){
        console.log(`${this.nombre}`)
        this.reservaciones.forEach((reservacion, i) => {
          console.log(`${i+1}.-${reservacion.printReservacion()}`)  
        })
    }
}
let prueba = new Hotel("Las Brisas")
let reservacion1 = new Reservacion(1234, new Date(2003,4,23), 5) 
        let huesped1 = new Huesped("Jose Manuel Alcantar", "Masculino")
        let huesped2 = new Huesped("Maria Regina Mariel", "Femenino")
        reservacion1.addHuesped(huesped1)
        reservacion1.addHuesped(huesped2)
        prueba.addReservacion(reservacion1)
        let reservacion2 = new Reservacion(1222, new Date(2005,6,13), 5) 
        let huesped3 = new Huesped("Alan Ugarte Saucedo", "Masculino")
        let huesped4 = new Huesped("Daniela Covarrubias Mendoza", "Femenino")
        reservacion2.addHuesped(huesped3)
        reservacion2.addHuesped(huesped4)
        prueba.addReservacion(reservacion2)

        console.log(prueba.printHotel())
        console.log(prueba.getNumHuespedes2())
        