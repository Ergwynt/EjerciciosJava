const misiones = document.querySelectorAll('.mision');

misiones.forEach(mision => {
    mision.addEventListener('click', function() {
        this.classList.toggle('completada');
        
        // Mostrar un mensaje al completar la misión
        if (this.classList.contains('completada')) {
            mostrarMensaje(`¡Misión completada: ${this.textContent}!`, 'success');
        } else {
            mostrarMensaje(`Misión marcada como incompleta: ${this.textContent}.`, 'error');
        }
    });
});

function mostrarMensaje(mensaje, tipo) {
    const mensajeElemento = document.createElement('div');
    mensajeElemento.textContent = mensaje;
    mensajeElemento.classList.add('mensaje', tipo); // Añadir la clase tipo
    document.body.appendChild(mensajeElemento);
    
    setTimeout(() => {
        mensajeElemento.remove();
    }, 3000);
}

