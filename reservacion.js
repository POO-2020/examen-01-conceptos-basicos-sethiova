import Huesped from "./huesped.js"
export default class Reservacion {
    constructor(numeroHabitacion, fechaLlegada, noches) {
        this.numeroHabitacion = numeroHabitacion
        this.fechaLlegada = fechaLlegada
        this.noches = noches
        this.huespedes = new Array()
    }
    
    getFechaFormatoCorto() {
        return (`${this.fechaLlegada.getDate()}/${this.fechaLlegada.getMonth()}/${this.fechaLlegada.getFullYear()}`)
    }

    addHuesped(huesped) {
        this.huespedes.push(huesped)
    }
    
    getNumHuespedes1() {
    return this.huespedes.length
    }

    printReservacion() {
        console.log(`Habitación: ${this.numeroHabitacion}`)
        console.log(`Fecha Llegada: ${this.getFechaFormatoCorto()}`)
        console.log(`${this.noches} noches reservadas`)
        this.huespedes.forEach((huesped, i) => {
        console.log(`${i+1}.- ${huesped.getDescripcion()}`)
        })
    }
}
