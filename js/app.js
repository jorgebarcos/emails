// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

// event Listeners
eventListeners();

function eventListeners() {
	// Inicio de la aplicación y deshabilitar submit
	document.addEventListener('DOMContentLoaded', inicioApp);
}

// Funciones
function inicioApp() {
	// deshabilitar el envio

	btnEnviar.disabled = true;
}
