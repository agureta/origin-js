class Rutina {
    constructor(id,ejercicio,series){
        this.id = id
        this.ejercicio= ejercicio
        this.series=series
    }

    aumentarSeries(series){
        this.series = this.series + series
    }

    decripcion(){
        return "ejercicio: " + this.ejercicio
                "/n series: " + this.series
    }
}

class ControladorTrabajo{
    constructor(){
        this.listaEjercicios = []
    }

    agregar(ejercicio){
        this.listaEjercicios.push(ejercicio)
    }

    buscarEjercicioPorID(id){
        return this.listaEjercicios.find(ejercicio => Rutina.id == id)
    }

    mostrarEjercicios(){
        let listaEnTexto = ""
        this.listaEjercicios.forEach(ejercicio => {
            listaEnTexto = listaEnTexto + ejercicio.decripcion() + "/n------------/n"
        })
        alert(listaEnTexto)
    }
}

class CarritoDeEjercicios{
    constructor(){
        this.listaCarrito = []
    }

    agregar(ejercicio,series){
        let existe = this.listaCarrito.some (el => el.id == ejercicio.id)
        if(existe){
            ejercicio.aumentarSeries(series)
        }else{
            ejercicio.aumentarSeries(series)
            this.listaCarrito.push(series)
        }
    }


mostrarEjercicios(){
    let listaEnTexto = "Carrito de ejercicios:/n"
    this.listaCarrito.forEach(ejercicio =>{
        listaEnTexto = listaEnTexto + ejercicio.decripcion()
    })
    alert(listaEnTexto)
}

calcularTotal(){
    return this.listaCarrito.reduce( (acumulador, ejercicio) => acumulador + Rutina.ejercicio * Rutina.series , 0 )
}}


const CT = new ControladorTrabajo()
const CARRITO = new CarritoDeEjercicios()

CT.agregar(new ejercicio(1,"press banca", 8))
CT.agregar(new ejercicio(2,"sentadilla", 9))
CT.agregar(new ejercicio(3,"dominadas", 4))

let rta

do{
    CT.mostrarEjercicios()
    let opcion= Number(prompt("Ingrese el codigo del producto que desea agregar"))
    let ejercicio= CT.buscarEjercicioPorID(opcion)
    let series= Number(prompt("Ingrese la cantidad de series que realizo"))

    CARRITO.agregar(ejercicio,series)
    alert("El ejercicio se agrego")
    CARRITO.mostrarEjercicios()

    rta= prompt("Ingrese ESC para salir").toUpperCase()
}while(rta != "ESC")

alert ("Hoy realizo :" + CARRITO.resumen)
