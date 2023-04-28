function pedidoHTML(nuevoPedido){
    return `<div class="pedidos-realizados">
                <p>${nuevoPedido.numero}</p>
                <p>${nuevoPedido.kilometros}km</p>
                <p>$${nuevoPedido.totalNeto}</p>
                <button class="boton-delete" id=${nuevoPedido.numero}><img src="assets/trash.png"></button>
            </div>`
}

function historialHTML(nuevoPedido){
    return `<div class="pedidos-realizados">
                <p>${nuevoPedido.numero}</p>
                <p>${nuevoPedido.kilometros}km</p>
                <p>$${nuevoPedido.totalNeto}</p>
            </div>`
}

function retornoProblema(usuario){
    return `<p>Hola ${usuario}, soy Facundo y te comento, actualmente trabajo para Pedidos Ya, 
            cómo todo trabajo tiene sus cosas buenas y malas, pero al trabajar para un app como esta, 
            claramente los trabajadores somos desechables, si se va uno aparecerá otro, entonces las 
            condiciones que nos proponen para trabajar son bastante precarias y es un "tomalo o dejalo".</p>`
}


