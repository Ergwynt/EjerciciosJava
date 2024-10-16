const anillos = document.querySelectorAll('.anillo');
const mensaje = document.getElementById('mensaje');

anillos.forEach(anillo => {
    anillo.addEventListener('click', function() {
        if (this.id === 'frodo') {
            mensaje.textContent = "Has elegido correctamente";
            mensaje.style.color = "green";
        } else {
            mensaje.textContent = "Has elegido mal. Intenta de nuevo.";
            mensaje.style.color = "red";
        }
    });
});
