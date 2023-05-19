/* Reloj */

function mostrarTiempo(){
    var fecha = new Date();
	
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
	
    var mediodia = "DE LA MAÑANA";
    
	/* Hará que la medianoche se muestre como 12 */
    if(horas == 0){
        horas = 12;
    }
    
	/* Mostrará las horas de la tarde tras el mediodia */
    if(horas > 12){
        horas = horas - 12;
        mediodia = "DE LA TARDE";
    }
    
	/* Esto añadirá un cero delante del numero cuando este sea 9 o inferior */
    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;
    
	/* Finalmente, esto mostrará las horas, minutos, segundos (separados por dos puntos) y si es por la mañana o por la tarde */
    var relojContenido = horas + ":" + minutos + ":" + segundos + " " + mediodia;
	
	
    document.getElementById("relojJS").innerText = relojContenido;
    document.getElementById("relojJS").textContent = relojContenido;
    
    setTimeout(mostrarTiempo, 1000);
    
}

mostrarTiempo();






/* Carrusel */


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