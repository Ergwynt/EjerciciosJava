const sable = document.getElementById('sable');
const sableApagado = 'sable_apagado.png';
const sableEncendido = 'sable_encendido.png';

sable.addEventListener('click', function() {
    if (sable.src.includes(sableApagado)) {
        sable.src = sableEncendido;
    } else {
        sable.src = sableApagado;
    }
});
