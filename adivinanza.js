const generarNumeroAleatorio = ()=>{
	return Math.floor(Math.random() * 100 ) + 1
}

const verificarNumeroAleatorio = (numeroSecreto, numeroAdivinado)=>{
	if(numeroAdivinado === numeroSecreto){
		console.log("FELICIDADES NUMERO ADIVINADO")
	}
	else if(numeroAdivinado > numeroSecreto){
		console.log("Casi, el numero secreto es menor ")
	}else if (numeroAdivinado < numeroSecreto){
		console.log("Casi, el numero secreto es mayor")
	}
}

module.exports = {
	generarNumeroAleatorio,
	verificarNumeroAleatorio
}