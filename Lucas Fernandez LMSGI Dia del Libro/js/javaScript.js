var carrusel = document.querySelector('#carruselRecs')
var imagenes = carrusel.querySelectorAll('#img')

var indiceImagenActual = 0 // Inicializamos el índice de la imagen actual en 0

function mostrarImagenActual(indice) {
	if (indice !== indiceImagenActual) {
		imagenes[indiceImagenActual].classList.remove('portadaRec')
		imagenes[indiceImagenActual].classList.add('portadaRecInvisible')
	}
	imagenes[indice].classList.remove('portadaRecInvisible')
	imagenes[indice].classList.add('portadaRec')
	indiceImagenActual = indice
}


function mostrarAnterior() {
	indice =
		indiceImagenActual === 0 ? imagenes.length - 1 : indiceImagenActual - 1
	mostrarImagenActual(indice)
}

function mostrarSiguiente() {
	indice =
		indiceImagenActual === imagenes.length - 1 ? 0 : indiceImagenActual + 1
	mostrarImagenActual(indice)
}

mostrarImagenActual(indiceImagenActual)
