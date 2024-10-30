// Tipos de cambio
const TIPO_CAMBIO_COMPRA = 3.76;
const TIPO_CAMBIO_VENTA = 3.78;

// Estado actual de la operación (compra o venta)
let operacionActual = 'compra';

// Función para seleccionar la operación
function seleccionarOperacion(operacion) {
    operacionActual = operacion;

    // Cambia el estado activo de los botones
    document.getElementById('btn-compra').classList.remove('activo');
    document.getElementById('btn-venta').classList.remove('activo');
    if (operacion === 'compra') {
        document.getElementById('btn-compra').classList.add('activo');
    } else {
        document.getElementById('btn-venta').classList.add('activo');
    }

    // Actualizar el cálculo
    calcularCambio();
}

// Función para calcular el cambio
function calcularCambio() {
    const dolares = parseFloat(document.getElementById('dolares').value);

    if (!isNaN(dolares) && dolares > 0) {
        let soles;
        if (operacionActual === 'compra') {
            soles = dolares * TIPO_CAMBIO_COMPRA;
        } else {
            soles = dolares * TIPO_CAMBIO_VENTA;
        }
        document.getElementById('soles').value = "S/ " + soles.toFixed(2);
    } else {
        document.getElementById('soles').value = "S/ 0.00";
    }
}
function redireccionarWhatsApp() {
    const telefono = "51923539682"; // Reemplaza con el número de WhatsApp de la empresa
    const mensaje = "Hola, quiero hacer una consulta sobre el cambio de divisas."; // Puedes personalizar este mensaje
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}
