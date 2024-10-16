const imagenes = document.querySelectorAll('.imagen');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', function() {
        if (this.src.includes('groot.jpeg')) {
            alert('¡Yo soy Groot!');
        } else {
            alert('¡No es Groot! Intenta de nuevo.');
        }
    });
});
