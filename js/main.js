const puntoEntrega = 90;
const puntoRetiro = 55;
const kmPuntRet = 30;
const kmPuntEnt = 55;


let continuar;

function cobroKmRanking() {
    let ranking = inputRank.value;
    rank(ranking);
    return cobroKmRanking
}
function rank(ranking) {
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
    return cobroKM
}
let suma;


function cobroPorRetiro() {
    let retiroKm = parseFloat(document.querySelector("input.km-retiro").value);
    return isNaN(retiroKm) ? alert("Ingresa un numero valido") : retiroKm * kmPuntEnt;
    /*if (isNaN(retiroKm)) {
        alert("Ingresa un numero valido");
        return;
    } else {
        let totalRetiro = retiroKm * kmPuntRet;
        return totalRetiro;
    } */
}
function cobroPorEntrega() {
    let entregaKm = parseFloat(document.querySelector("input.km-entrega").value);
    return isNaN(entregaKm) ? alert("Ingresa un numero valido") : entregaKm * cobroKM
}
let arrayPedido = [];
let totalRetiro;
let totalEntrega;
let totalNeto;
function cobroTotal() {
    totalRetiro = cobroPorRetiro();
    totalEntrega = cobroPorEntrega();
    totalNeto = totalRetiro + totalEntrega + puntoEntrega + puntoRetiro;
    if (totalEntrega > 0 && totalRetiro > 0) {
        let numero = arrayPedido.length + 1;
        // let numeroPedido = JSON.parse(localStorage.getItem("pedidos")) me gustaria que el contador de pedidos no se reinicie y lo tome desde el storage al anterior
        // let numero = numeroPedido.numero;
        let kilometros = document.querySelector("input.km-entrega").value;
        let nuevoPedido = {numero: numero, kilometros: kilometros, totalNeto: totalNeto};
        arrayPedido.push(nuevoPedido);
        cargarPedidos(arrayPedido);
        cargarStoragePedidos(nuevoPedido);
    } else {
        return
    }
}




function cargarStoragePedidos() {
    arrayPedido.length > 0 && localStorage.setItem("pedidos", JSON.stringify(arrayPedido));
    }

function recuperarStoragePedidos() {
    const pedidosStorage = JSON.parse(localStorage.getItem("pedidos"));
    pedidosStorage && pedidosStorage.length > 0 && cargarPedidos(pedidosStorage) && pedidosStorage.forEach(pedido=> {arrayPedido.push(pedido)});
    }
/*     if (pedidosStorage && pedidosStorage.length > 0){
        cargarPedidos(pedidosStorage);
        pedidosStorage.forEach(pedido=> {
            arrayPedido.push(pedido);

        })
    } */

/* suma el total de los pedidos */
let totalCobro = 0;
function sumarNetos() {
    arrayPedido.forEach((pedido)=>{
        totalCobro += pedido.totalNeto;
    })
}
totalCobro = sumarNetos();




