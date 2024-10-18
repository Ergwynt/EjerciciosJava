const btnToggle = document.getElementById('toggle-btn');
const batmanMask = document.getElementById('batman-mask');

// Agrega la clase 'hidden' inicialmente (opcional, ya que ya está en el HTML)
batmanMask.classList.add('hidden');

btnToggle.addEventListener('click', function() {
    if (batmanMask.classList.contains('hidden')) {
        batmanMask.classList.remove('hidden');
        batmanMask.classList.add('visible');
    } else {
        batmanMask.classList.remove('visible');
        batmanMask.classList.add('hidden');
    }
});
