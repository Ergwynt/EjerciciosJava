const escudo = document.getElementById('escudo');
let posicion = 0;

escudo.addEventListener('click', function() {
    setInterval(function() {
        posicion += 10;
        escudo.style.transform = `translateX(${posicion}px)`;
    }, 100);
});
