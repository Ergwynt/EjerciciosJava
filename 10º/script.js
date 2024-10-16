const boton = document.getElementById('batiseñal-btn');

boton.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('señal.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
});
