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
    let ranking = "";
    continuar = true;
    while (continuar) {
        ranking = prompt("Que ranking sos?");
        if (ranking === "1" || ranking === "2" || ranking === "3" || ranking === "4" || ranking === "5" || ranking === "6" || ranking === "7") {
            continuar = false
            pedidoRecibido()
        } else {
            alert("Por favor, ingresa un ranking valido, recordá que es del 1 al 7.")
        }
    }
    switch (ranking) {
        case "1":
            cobroKM = cobroKM + 14;
            console.log("Te pagarán $" + cobroKM + " por KM.")
            break;
        case "2":
            cobroKM = cobroKM + 12;
            console.log("Te pagarán $" + cobroKM + " por KM.")
            break;
        case "3":
        case "4":
            cobroKM = cobroKM + 8;
            console.log("Te pagarán $" + cobroKM + " por KM.")
            break;
        default:
            cobroKM = cobroKM
            console.log("Te pagarán $" + cobroKM + " por KM.")
            break;
    }
    return ranking
}
let suma

let arrayPedido = [];

function pedidoRecibido() {
    let numero = arrayPedido.length + 1/* numero del pedido */
    let kilometros = prompt("¿Cuantos km tenés hasta el punto de entrega?")
    let cobroKmTotal = (kmPuntEnt + cobroKM) * kilometros; /* cuanto se cobra por km */
    suma = puntoEntrega + puntoRetiro + kmPuntRet + cobroKmTotal; /* monto por pedido */
    let nuevoPedido = {numero: numero, kilometros: kilometros, suma: suma}
    arrayPedido.push(nuevoPedido);
    console.log(nombre + "te pagarían por realizar el pedido apróximadamente " + suma + " pesos");
    continuar = confirm("¿Desea añadir otro pedido?")
    if (continuar) {
        pedidoRecibido()
    } else {
        let totalSuma = 0;
        for(let i = 0; i < arrayPedido.length; i++){
            totalSuma += arrayPedido[i].suma;
        }
        console.log("Estos son tus pedidos:");
        console.table(arrayPedido);
        console.log("El total a pagar por los pedidos es de: $" + totalSuma + " pesos");
    }
}