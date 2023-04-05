function pedidoHTML(pedido){
    return `<div class="pedidos">
    <p>Pedido Nro:<br> ${pedido.numero}</p>
    <p>Kilometross:<br> ${pedido.kilometros} </p>
    <p>Monto abonado:<br> $${pedido.totalNeto}</p>
</div>`
}