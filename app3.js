class Rutina {
    constructor(id, ejercicio, series){
        this.id = id;
        this.ejercicio = ejercicio;
        this.series = 0;
    }

    aumentarSeries(series){
        this.series = this.series + series;
    }

    descripcion(){
        return "ejercicio " + this.id + ": " + this.ejercicio + " " +
               "series: " + this.series + "\n";
    }
}

class ControladorTrabajo{
    constructor(){
        this.listaEjercicios = [];
    }

    agregar(ejercicio){
        this.listaEjercicios.push(ejercicio);
    }

    buscarEjercicioPorID(id){
        return this.listaEjercicios.find(ejercicio => ejercicio.id == id);
    }

    mostrarEjercicios(){
        let listaEnTexto = "";
        this.listaEjercicios.forEach(ejercicio => {
            listaEnTexto = listaEnTexto + ejercicio.descripcion() + " ";
        });
        alert(listaEnTexto);
    }
}

class CarritoDeEjercicios{
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
        let listaEnTexto = "Carrito de ejercicios: ";
        this.listaCarrito.forEach(ejercicio => {
            listaEnTexto = listaEnTexto + ejercicio.descripcion();
        });
        alert(listaEnTexto);
    }

    calcularTotal(){
        return this.listaCarrito.reduce((acumulador, ejercicio) => acumulador + ejercicio.series, 0);
    }

    calcularTotalDeSeries(){
        return this.listaCarrito.reduce((acumulador, ejercicio) => acumulador +  ejercicio.ejercicio + ejercicio.series, 0);
    }
}

const CT = new ControladorTrabajo();
const CARRITO = new CarritoDeEjercicios();

CT.agregar(new Rutina(1,"Press banca"));
CT.agregar(new Rutina(2,"Sentadilla"));
CT.agregar(new Rutina(3,"Dominadas"));
CT.agregar(new Rutina(4,"Curl Biceps"));
CT.agregar(new Rutina(5,"Extension de cuadriceps"));
CT.agregar(new Rutina(6,"Press militar"));

let rta;

do{
    CT.mostrarEjercicios();
    let opcion = Number(prompt("Ingrese el codigo del producto que desea agregar"));
    let ejercicio = CT.buscarEjercicioPorID(opcion);
    let series = Number(prompt("Ingrese la cantidad de series que realizo"));

    CARRITO.agregar(ejercicio, series);
    alert("El ejercicio se agrego");
    CARRITO.mostrarEjercicios();

    rta = prompt("Ingrese ESC para salir").toUpperCase();
} while(rta != "ESC");

alert("Hoy realizo: " + CARRITO.calcularTotal() + " series.");