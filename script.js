
const MercadoPago = require('mercadopago');

// Configura tus credenciales de Mercado Pago
const MP = new MercadoPago('TU_CLIENT_ID', 'TU_CLIENT_SECRET');

// Importa la biblioteca de CBU
const CBU = require('cbu-sdk');

// Configura tus credenciales de CBU
const cbu = new CBU('TU_CLAVE_DE_ACCESO');

// Agrega evento de clic al botón de pagar con Mercado Pago
document.getElementById('pagar-mercado-pago').addEventListener('click', () => {
// Crea un objeto de pago
const payment = {
amount: 100,
description: 'Pago de producto',
payment_method_id: 'visa',
payer: {
email: 'usuario@example.com',
},
};

// Crea una preferencia de pago
MP.createPreference(payment)
.then((response) => {
// Obtiene el ID de la preferencia
const preferenceId = (link unavailable);

// Redirige al usuario a la página de pago
window.location.href = `(link unavailable);
})
.catch((error) => {
console.error(error);
});
});

// Agrega evento de clic al botón de pagar con CBU
document.getElementById('pagar-cbu').addEventListener('click', () => {
// Crea un objeto de pago
const payment = {
amount: 100,
description: 'Pago de producto',
account_number: 'TU_NUMERO_DE_CUENTA',
bank_id: 'TU_ID_DE_BANCO',
};

// Crea una transacción de pago
cbu.createTransaction(payment)
.then((response) => {
// Obtiene el ID de la transacción
const transactionId = (link unavailable);

// Redirige al usuario a la página de pago
window.location.href = `(link unavailable);
})
.catch((error) => {
console.error(error);
});
});

// Carrusel automático
const carrusel = document.querySelector('.carrusel');
const productos = document.querySelectorAll('.producto');
let indice = 0;

setInterval(() => {
indice++;
if (indice >= productos.length) {
indice = 0;
}
carrusel.style.transform = `translateX(${indice * -100}%)`;
}, 3000);

// Agregar producto al carrito
const carrito = document.querySelector('.carrito ul');
const comprarButtons = document.querySelectorAll('.comprar');

comprarButtons.forEach((button) => {
button.addEventListener('click', () => {
const producto = button.parentNode;
const productoNombre = producto.querySelector('h2').textContent;
const productoPrecio = producto.querySelector('p').textContent;

const productoCarrito = document.createElement('li');
productoCarrito.innerHTML = `
<span>${productoNombre}</span>
<span>${productoPrecio}</span>
<button class="eliminar">Eliminar</button>
`;

carrito.appendChild(productoCarrito);

// Agregar evento de clic al botón de eliminar
productoCarrito.querySelector('.eliminar').addEventListener('click', () => {
productoCarrito.remove();
});
});
});
