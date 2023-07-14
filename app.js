let resultado = 0
let repemax = "tu 1RM es: \n"

let rta= ""

do{
let repeticiones=Number (prompt("cuantas repeticiones realizaste"))
let peso=Number (prompt("con cuanto peso x cada repe?"))

rta = prompt ("desea ver el resultado? escribe 'si'")

resultado = resultado + (peso*(1+(0.025*repeticiones)))
repemax = repemax + resultado + "kg"

} while (rta != "si")

alert(repemax)


if(resultado > 100){
    alert("estas muy fuerte")
} else{
    alert("segui entrenando!")
}
