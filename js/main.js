const puntoEntrega = 90;
const puntoRetiro = 55;
const kmPuntRet = 30;
const kmPuntEnt = 55;

let nombre = null;

while (!nombre) {
    nombre = prompt("Hola, ¿cómo te llamas?");
    if (!/^[a-zA-Z]+$/.test(nombre)) {
        alert("Por favor, ingrese su nombre.");
        nombre = null;
    } else {
        console.log("Hola " + nombre + ", un gusto saludarte!.")
    }
}

let ranking
let cobroKM = 15
let continuar

function rank() {
    let ranking = prompt("¿Que ranking sos?")
    switch (ranking) {
        case "1":
            cofbroKM = cobroKM + 14;
            break;
        case "2":
            cobroKM = cobroKM + 12;
            break;
        case "3":
        case "4":
            cobroKM = cobroKM + 8;
            break;
        default:
            cobroKM = cobroKM
            break;
    }
}
function pagoKilometraje() {
    let kilometros = parseFloat(prompt("¿Cuantos km tenes hasta el punto de entrega?"))
    let cobroKmTotal = (kmPuntEnt + cobroKM) * kilometros;
    let suma = puntoEntrega + puntoRetiro + kmPuntEnt + kmPuntRet + cobroKmTotal
    console.log("Te pagarían por realizar el pedidoapróximadamente " + suma + " pesos")
    pagoTotal = suma;

    continuar = confirm("¿Querés preguntar por otro pedido?")
    while (continuar) {
        pagoKilometraje()
    }
} 