const nazgulItems = document.querySelectorAll('#nazgul-list li');


nazgulItems.forEach(item => {
    
    item.addEventListener('mouseenter', function() {
        this.setAttribute('data-original', this.textContent);  
        this.textContent = 'Nazgûl';  
    });

    item.addEventListener('mouseleave', function() {
        this.textContent = this.getAttribute('data-original'); 
    });
});
