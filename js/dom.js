const inputRank = document.querySelector("input.input-rnk");
const inputBtn = document.querySelector("button.input-btn");
    inputBtn.innerText = "Siguiente";
    inputBtn.addEventListener("click", ()=> {
        recuperarStoragePedidos()
    })
const historial = document.querySelector("div.historial")
const sectionHistorial = document.querySelector("section.section-historial")
const botonDifuminado = document.querySelector("div.sacar-difuminado")
    botonDifuminado.addEventListener("click", ()=>{
        sectionHistorial.classList.remove("difuminado")
    })




const botonPedidos = document.querySelector("button.pedido-btn")
    botonPedidos.innerText = "Cargar pedido.";
    botonPedidos.addEventListener("click", ()=> {
        guardarStoragePedidos();
    })
const pedidosCargados = document.querySelector("#pedidosCargados");
const regex = /^[a-zA-Z]+$/;
const inputRetiro = document.querySelector("input.km-retiro");
const inputEntrega = document.querySelector("input.km-entrega");
const divPedidos = document.querySelector("div.form-pedidos.ocultar");
const pagos = document.querySelector("div.pagos");
const borrarPedidos = document.querySelector("div.borrarPedidos")
borrarPedidos.addEventListener("click", ()=>{
    alertaEliminarHistorial();
})
const blurBoton = document.querySelector("button.blur")
    blurBoton.addEventListener("click", ()=> {
        if (arrayPedido.length === 0) {
            recuperarStoragePedidos()
        }
        })
const obtenerTotal = document.querySelector("div.total") //sumar total y reflejarlo
        obtenerTotal.addEventListener("click", ()=>{
            plata()
            divPago.innerText = "El total a cobrar es de $" + plata()
        })
const divPago = document.querySelector("div.div-pago");


const form = document.querySelector("#formulario");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let ranking = inputRank.value;
    localStorage.setItem("ranking", JSON.stringify(ranking));
        if (ranking >= 1 && ranking <= 7)  {
            cobroKmRanking();
            form.classList.add("ocultar");
            divPedidos.classList.remove("ocultar");
        } else {
            alertaDatos();
        }
    });




const formPedidos = document.querySelector("#pedidos"); //creacion de pedido
    formPedidos.addEventListener("submit", (e) =>{
        e.preventDefault();
        cobroPorRetiro(); //valor de ir a buscar el pedido
        cobroPorEntrega(); //valor de llevarlo
        cobroTotal(); 
        plata();
        clear();
    })

    function clear(){ //limpia inputs value
        inputEntrega.value = "";
        inputRetiro.value = "";
    }




