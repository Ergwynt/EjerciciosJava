const misiones = document.querySelectorAll('.mision');

misiones.forEach(mision => {
    mision.addEventListener('click', function() {
        this.classList.toggle('completada');
        
        // Mostrar un mensaje al completar la misión
        if (this.classList.contains('completada')) {
            mostrarMensaje(`¡Misión completada: ${this.textContent}!`);
        } else {
            mostrarMensaje(`Misión marcada como incompleta: ${this.textContent}.`);
        }
    });
});

function mostrarMensaje(mensaje) {
    const mensajeElemento = document.createElement('div');
    mensajeElemento.textContent = mensaje;
    mensajeElemento.classList.add('mensaje');
    document.body.appendChild(mensajeElemento);
    

    setTimeout(() => {
        mensajeElemento.remove();
    }, 3000);
}

