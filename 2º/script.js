const nazgulItems = document.querySelectorAll('#nazgul-list li');

nazgulItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.textContent = 'Nazgûl';
    });

    item.addEventListener('mouseleave', function() {
        this.textContent = 'Personaje';
    });
});
