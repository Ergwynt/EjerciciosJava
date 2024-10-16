const inputPassword = document.getElementById('input-password');
const btnVerificar = document.getElementById('btn-verificar');
const mensaje = document.getElementById('mensaje');

btnVerificar.addEventListener('click', function() {
    const password = inputPassword.value;
    
    if (password === "Vengadores") {
        mensaje.textContent = "Assemble!";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Contraseña incorrecta. Intenta de nuevo.";
        mensaje.style.color = "red";
    }
});
