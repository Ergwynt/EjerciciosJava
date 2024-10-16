const misiones = document.querySelectorAll('.mision');

misiones.forEach(mision => {
    mision.addEventListener('click', function() {
        this.classList.toggle('completada');
    });
});
