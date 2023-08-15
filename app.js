class Rutina {
    constructor(id, ejercicio, series){
        this.id = id;
        this.ejercicio = ejercicio;
        this.series = series;
    }

    aumentarSeries(series){
        this.series = this.series + series;
    }

    decripcion(){
        return "Ejercicio: " + this.ejercicio +
                "Series: " + this.series;
    }
}

class ControladorTrabajo{
    constructor(){
        this.listaEjercicios = [];
    }


    agregar(ejercicio){
        this.listaEjercicios.push(ejercicio);
    }

    cantidadDeSeries(series){
        this.listaEjercicios.push(series)
    }


    buscarEjercicioPorID(id){
        return this.listaEjercicios.find(ejercicio => ejercicio.id == id);
    }

    mostrarEjercicios(){
        let listaEnTexto = "";
        this.listaEjercicios.forEach(ejercicio => {
            listaEnTexto = listaEnTexto  + " ";
        });
        alert(listaEnTexto);
    }
}

class ejerciciosRealizados{
    constructor(){
        this.listaCarrito = [];
    }

    agregar(ejercicio, series){
        let existe = this.listaCarrito.some(el => el.id == ejercicio.id);
        if(existe){
            ejercicio.aumentarSeries(series);
        } else {
            ejercicio.aumentarSeries(series);
            this.listaCarrito.push(ejercicio);
        }
    }

    mostrarEjercicios(){
        let listaEnTexto = "Opciones de ejercicios: ";
        this.listaCarrito.forEach(ejercicio => {
            listaEnTexto = listaEnTexto + " " + ejercicio.decripcion() + "\n";
        });
        alert(listaEnTexto);
    }

    calcularTotalDeSeries(){
        return this.listaCarrito.reduce((acumulador, ejercicio) => acumulador +  ejercicio.ejercicio + ejercicio.series, 0);
    }
}

const CT = new ControladorTrabajo();
const CARRITO = new ejerciciosRealizados();

CT.agregar(new Rutina(1, "press banca"));
CT.agregar(new Rutina(2, "sentadilla"));
CT.agregar(new Rutina(3, "dominadas"));
CT.agregar(new Rutina(4, "Curl de biceps"));
CT.agregar(new Rutina(5, "Extension de cuadriceps"));

let rta;
let resumenEjercicios = "";

do {
    CT.mostrarEjercicios();
    let opcion = Number(prompt("Ingrese el código del ejercicio que desea agregar"));
    let ejercicio = CT.buscarEjercicioPorID(opcion);
    let series = Number(prompt("Ingrese la cantidad de series que realizó"));

    CARRITO.agregar(ejercicio, series);
    CARRITO.cantidadDeSeries(ejercicio, series)
    resumenEjercicios += CARRITO.mostrarEjercicios();

    rta = prompt("Ingrese ESC para salir").toUpperCase();
} while (rta !== "ESC");

resumenEjercicios += "Hoy realizó: " + calcularTotalDeSeries();

alert(resumenEjercicios);

