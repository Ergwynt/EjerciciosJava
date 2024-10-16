function mostrarReino(event) {
    const reino = event.target.textContent;
    alert(`Has hecho clic en el reino de ${reino}`);
}

const reinos = document.querySelectorAll('.reino');

reinos.forEach(reino => {
    reino.addEventListener('click', mostrarReino);
});