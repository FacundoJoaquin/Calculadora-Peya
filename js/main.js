const puntoEntrega = 90; //pago por entregar pedido
const puntoRetiro = 55; //pago por retirarlo
const kmPuntRet = 30; //valor base del kilometraje para retirar el pedido
const kmPuntEnt = 55; //valor base del kilometraje para entregar el pedido
const arrayPedido = [];
const URL = 'js/pedidos.json'


function cobroKmRanking() {
    let ranking = inputRank.value;
    let cobroKM = kmPuntEnt
    rank(ranking);
    return cobroKM
}
function rank(ranking) {  //valor del kilometraje al punto de entrega dependiendo del ranking
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

function cobroPorRetiro() { //monto a cobrar por retirar el pedido en base a la distancia
    let retiroKm = parseFloat(document.querySelector("input.km-retiro").value);
    return isNaN(retiroKm) ? alertaKilometraje() : retiroKm * kmPuntEnt;
}
function cobroPorEntrega() { //monto a cobrar por entregar el pedido en base a la distancia de retiro hasta punto de entrega
    let entregaKm = parseFloat(document.querySelector("input.km-entrega").value);
    return isNaN(entregaKm) ? alertaKilometraje() : entregaKm * cobroKM
}

let totalRetiro;
let totalEntrega;
let totalNeto;

function identificadorPedido() {
    let id = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
    return id
}

function cobroTotal() { //determina el pago del pedido
    totalRetiro = cobroPorRetiro();
    totalEntrega = cobroPorEntrega();
    totalNeto = totalRetiro + totalEntrega + puntoEntrega + puntoRetiro;
    if (totalEntrega > 0 && totalRetiro > 0) { //crea el pedido
        let numero = identificadorPedido();
        let kmRetiro = parseFloat(document.querySelector("input.km-retiro").value);
        let kmEntrega = parseFloat(document.querySelector("input.km-entrega").value);
        let kilometros = parseFloat(kmRetiro + kmEntrega).toFixed(2);
        let nuevoPedido = {numero: numero, kilometros: kilometros, totalNeto: totalNeto};
        arrayPedido.push(nuevoPedido);
        cargarPedidos(arrayPedido);
        guardarStoragePedidos(nuevoPedido);
        toastPedidoAgregado();
    } else {
        return
    }
}

function cargarPedidos() { //renderiza los pedidos en .pagos
    pagos.innerHTML = "";
    if (arrayPedido.length > 0) {
        arrayPedido.forEach(pedido => {
            pagos.innerHTML += pedidoHTML(pedido);
            botonesBorrar();
            divPago.innerText = "";
        });
    }
} 

function botonesBorrar() { //botones de borrar pedidos en .pagos
    const botones = document.querySelectorAll("button.boton-delete")
    if (botones !== null) {
        for (boton of botones) {
            boton.addEventListener("click", (e)=> {
                let index = arrayPedido.findIndex(pedido => pedido.numero === parseInt(e.target.id));
                arrayPedido.splice(index, 1)
                cargarPedidos()
                limpiarStoragePedidos()
                guardarStoragePedidos()
            })
        }
    }
}

function borrar() { //limpia los pedidos de localstorage y de .pedidos
    localStorage.setItem("pedidos", JSON.stringify([]));
    pagos.innerHTML = "";
    location.reload();
}

function guardarStoragePedidos() { //guarda los pedidos en localstorage
    arrayPedido.length > 0 ? localStorage.setItem("pedidos", JSON.stringify(arrayPedido)) : [];
    }

 function recuperarStoragePedidos() { //recupera storage y lo imprime en pantalla, tiene que ser un evento controlado
    let recuperoArray = JSON.parse(localStorage.getItem("pedidos")) || [];
    arrayPedido.push(...recuperoArray);
    cargarPedidos(arrayPedido);
    } 



    function plata() { //itero arrayPedidos y obtengo el total a cobrar
        let dinero = 0;
        arrayPedido.forEach(pedido => {
            dinero += parseInt(pedido.totalNeto);
        });
        return dinero;
    }
    
const arrayHistorial = [];
function renderizarHistorial(){ 
    historial.innerHTML = "";
    if (arrayHistorial.length > 0) {
        arrayHistorial.forEach(pedido => {
            historial.innerHTML += historialHTML(pedido);
            botonesBorrar();
        });
    }
}

    function pedidosHistorial(){
        fetch(URL)
        .then(response => response.json())
        .then(data =>arrayHistorial.push(...data))
        .then(data => {
            renderizarHistorial(arrayHistorial);
        })
        .catch(error => errorCargarFetch(error)) 
        }


        
let historialFetch = pedidosHistorial();

function limpiarStoragePedidos() { //vacia localStorage "pedidos"
    localStorage.removeItem("pedidos");
}



