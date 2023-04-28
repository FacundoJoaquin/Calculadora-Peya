function toastPedidoAgregado() {
    Toastify({
        text: "Pedido agregado",
        className: "info",
        gravity: "bottom",
        position: "right",
        duration: 1500,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
}

function alertaKilometraje() {
    Swal.fire({
        icon: 'warning',
        iconColor: 'red',
        title: 'Error',
        text: 'Ingresa un kilometraje valido',
      })
}

function alertaDatos() {
    Swal.fire({
        icon: 'warning',
        iconColor: 'red',
        title: 'Error',
        text: 'Error en los datos ingresados, por favor verificar.',
        footer: 'Ingresa tu nombre y tu ranking, recordá que este puede ser de 1 a 7.'
      })
}

function alertaNombre() {
    Swal.fire({
        icon: 'warning',
        iconColor: 'red',
        title: 'Error',
        text: 'Error en el nombre ingresado.',
        footer: 'Por favor, ingresa tu nombre.'
      })
      inputNombre.value = ""
}
function alertaEliminarHistorial(){
    Swal.fire({
        title: 'Confirmar',
        text: "Una vez eliminado, no se podrá recuperar.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fa0050',
        cancelButtonColor: '#00d9fc',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            'El historial ha sido eliminado satisfactoriamente.',
            borrar(),
          )
        }
      })

}

function errorCargarFetch(){
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo recuperar el historial',
    type: 'question'
  });
}