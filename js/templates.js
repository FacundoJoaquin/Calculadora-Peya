function pedidoHTML(nuevoPedido){
    return `<div class="pedidos-realizados">
                <p>${nuevoPedido.numero}</p>
                <p>${nuevoPedido.kilometros}km</p>
                <p>$${nuevoPedido.totalNeto}</p>
            </div>`
}
