const btnToggle = document.getElementById('toggle-btn');
const batmanMask = document.getElementById('batman-mask');

btnToggle.addEventListener('click', function() {
    if (batmanMask.style.display === 'none' || batmanMask.style.display === '') {
        batmanMask.style.display = 'block';
    } else {
        batmanMask.style.display = 'none';
    }
});
