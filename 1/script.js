document.getElementById('encontrarAnillo').addEventListener('click', function() {
    const personajes = document.querySelectorAll('#personajes li');
    personajes.forEach(personaje => {
        personaje.classList.remove('highlight');
    });

    const frodo = document.querySelector('#personajes li:nth-child(4)');
    frodo.classList.add('highlight');
});
