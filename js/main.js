const puntoEntrega = 90;
const puntoRetiro = 55;
const kmPuntRet = 30;
const kmPuntEnt = 55;

let ranking

let continuar


function rank() {
    let ranking;
    continuar = true;
    while (continuar) {
        ranking = inputRank.value;
        if (ranking === "1" || ranking === "2" || ranking === "3" || ranking === "4" || ranking === "5" || ranking === "6" || ranking === "7") {
            continuar = false
        } else {
            alert("Por favor, ingresa un ranking valido, recordá que es del 1 al 7.");
            break
        }
    }
    switch (ranking) {
        case "1":
            cobroKM = kmPuntEnt + 14;
            break;
        case "2":
            cobroKM = kmPuntEnt + 12;
            break;
        case "3":
        case "4":
            cobroKM = kmPuntEnt + 8;
            break;
        default:
            cobroKM = kmPuntEnt;
            break;
    }
    return ranking
}
let suma


function cobroPorRetiro() {
    let retiroKm = parseFloat(document.querySelector("input.km-retiro").value);
    if (isNaN(retiroKm)) {
        alert("Ingresa un numero valido");
        return;
    } else {
        let totalRetiro = retiroKm * kmPuntRet;
        return totalRetiro;
    }
}
function cobroPorEntrega() {
    let entregaKm = parseFloat(document.querySelector("input.km-entrega").value);
    let totalEntrega = entregaKm * cobroKM;
    return totalEntrega;
}

let arrayPedido = [];
function cobroTotal() {
    let totalRetiro = cobroPorRetiro();
    let totalEntrega = cobroPorEntrega();
    let totalNeto = totalRetiro + totalEntrega + puntoEntrega + puntoRetiro;
    if (totalEntrega > 0 && totalRetiro > 0) {
        let numero = arrayPedido.length + 1;
        let kilometros = document.querySelector("input.km-entrega").value;
        let nuevoPedido = {numero: numero, kilometros: kilometros, totalNeto: totalNeto}
        arrayPedido.push(nuevoPedido);
        cargarPedidos(arrayPedido);
        cargarStoragePedidos();
    } else {
        return
    }
}
function cargarPedidos(arrayPedidos) {
    let display = "";
    if (arrayPedidos.length > 0) {
        arrayPedidos.forEach(pedido => {
            display += pedidoHTML(pedido);
        });
        pedidosCargados.innerHTML = display;
    }
}


function cargarStoragePedidos() {
    if (arrayPedido.length > 0) {
        localStorage.setItem("pedidos", JSON.stringify(arrayPedido))
    }
}
function recuperarStoragePedidos() {
    if (arrayPedido.getItem("pedidos")){
        let pedidosStorage = JSON.parse(localStorage.getItem("pedidos"));
        cargarPedidos(pedidosStorage);
        pedidosStorage.forEach(pedido=> {
            arrayPedido.push(pedido);
        })
    }
}
/* suma el total de los pedidos */
function sumarNetos() {
    let ff22 = 0;
    arrayPedido.forEach((pedido)=>{
        ff22 += pedido.totalNeto;
    })
    return ff22;
}
let ff33 = 1;
ff33 =  sumarNetos();

function pedidoRecibido() { /* useless */
    let numero = arrayPedido.length + 1/* numero del pedido */
    let kilometros = prompt("¿Cuantos km tenés hasta el punto de entrega?")
    let cobroKmTotal = cobroKM * kilometros; /* cuanto se cobra por km */
    suma = puntoEntrega + puntoRetiro + kmPuntRet + cobroKmTotal; /* monto por pedido */
    let nuevoPedido = {numero: numero, kilometros: kilometros, suma: suma}
    arrayPedido.push(nuevoPedido);
/*   console.log(nombre + ", te pagarían por realizar el pedido apróximadamente " + suma + " pesos"); */
    continuar = confirm("¿Desea añadir otro pedido?")
    if (continuar) {
        pedidoRecibido()
    } else {
        let totalSuma = 0;
        for(let i = 0; i < arrayPedido.length; i++){
            totalSuma += arrayPedido[i].suma;
        }
/*         console.log("Estos son tus pedidos:");
        console.table(arrayPedido);
        console.log(nombre + ", el total a pagar por los pedidos es de: $" + totalSuma + " pesos");
 */    }
}

/* ESTE PUEDE SERVIR FER MINUTO 12*/
