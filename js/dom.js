const inputRank = document.querySelector("input.input-rnk");
const inputBtn = document.querySelector("button.input-btn");
    inputBtn.innerText = "Siguiente";
const botonPedidos = document.querySelector("button.pedido-btn")
    botonPedidos.innerText = "Cargar pedido.";
const pedidosCargados = document.querySelector("#pedidosCargados");
const regex = /^[a-zA-Z]+$/;
const inputRetiro = document.querySelector("input.km-retiro");
const inputEntrega = document.querySelector("input.km-entrega");
const divPedidos = document.querySelector("div.form-pedidos.ocultar");
const pagos = document.querySelector("div.pagos");
const borrarPedidos = document.querySelector("div.borrarPedidos")


function alertaDatos() {
    Swal.fire({
        icon: 'warning',
        iconColor: 'red',
        title: 'Error',
        text: 'Error en los datos ingresados, por favor verificar.',
        footer: 'Ingresa tu nombre y tu ranking, recordá que este puede ser de 1 a 7.'
      })
}

const form = document.querySelector("#formulario");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let ranking = inputRank.value;
        localStorage.setItem("ranking", ranking) /* una vez guardado en localStorage el nombre y el ranking estaría bueno no volver a preguntarlo */
    let nombre = document.querySelector(".input-name").value;
        localStorage.setItem("nombre", nombre)
        if (regex.test(nombre) && ranking >= 1 && ranking <= 7) {
            cobroKmRanking();
            recuperarStoragePedidos();
            form.classList.add("ocultar");
            divPedidos.classList.remove("ocultar");
        } else {
            alertaDatos();
        }
    });



const formPedidos = document.querySelector("#pedidos");
    formPedidos.addEventListener("submit", (e) =>{
        e.preventDefault();
        cobroPorRetiro(); //valor de ir a buscar el pedido
        cobroPorEntrega(); //valor de llevarlo
        cobroTotal(); 
        sumarNetos();
        clear();
    })



function cargarPedidos(arrayPedidos) {
    pagos.innerHTML = "";
    if (arrayPedidos.length > 0) {
        arrayPedidos.forEach(pedido => {
            pagos.innerHTML += pedidoHTML(pedido);
        });
    }
}

function clear(){
    inputEntrega.value = "";
    inputRetiro.value = "";
}



