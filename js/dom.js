const inputRank = document.querySelector("input.input-rnk");
const inputBtn = document.querySelector("button.input-btn");
const botonPedidos = document.querySelector("button.pedido-btn")
const pedidosCargados = document.querySelector("#pedidosCargados");
const regex = /^[a-zA-Z]+$/;
const inputRetiro = document.querySelector("input.km-retiro");
const inputEntrega = document.querySelector("input.km-entrega")
const divPedidos = document.querySelector("div.form-pedidos.ocultar")
let nombre;


const form = document.querySelector("#formulario");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let ranking = inputRank.value;
    let nombre = document.querySelector(".input-name").value;
        if (regex.test(nombre) && ranking >= 1 && ranking <= 7) {
            console.log("Bienvenido " + nombre);
            form.classList.add("ocultar");
            divPedidos.classList.remove("ocultar")
            rank();
        } else {
            alert("Por favor, ingresa datos validos.");
            return
        }
    });

const formPedidos = document.querySelector("#pedidos");
    formPedidos.addEventListener("submit", (e) =>{
        e.preventDefault();
        cobroPorRetiro();
        cobroPorEntrega();
        cobroTotal();
        sumarNetos();
    })





/* esto habria que encerrarlo en una funcion
        let retiroKm = document.querySelector("input.km-entrega").value;        ;
        let total = retiroKm * kmPuntRet;
        console.log(total) */






    /* let nm = "Facu"
    localStorage.setItem("iva", 21);
    localStorage.setItem("nombre", nm) 
let usuarioEnLocalStorage = localStorage.getItem("nombre")

let usuario = prompt("Ingrese su nombre")
localStorage.setItem("usuario", usuario)
let usuarioLocal = localStorage.getItem("usuario")
console.log(usuarioLocal)*/
