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