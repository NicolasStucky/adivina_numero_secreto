const readlineSync = require("readline-sync")
const {generarNumeroAleatorio, verificarNumeroAleatorio} = require("./adivinanza")

const obtenerNumero = () => {
	return readlineSync.question("Ingrese el numero: ")
}

const jugarAdivinanza = () => {
	const numeroSecreto = generarNumeroAleatorio
	let numeroAdivinado = 0

	console.log("BIENVENIDO, INTENTA ADIVINAR EL NUMERO SECRETO")

	while( numeroAdivinado !== numeroSecreto){
		numeroAdivinado = obtenerNumero();
		verificarNumeroAleatorio(numeroSecreto, numeroAdivinado)
	}
}

jugarAdivinanza();