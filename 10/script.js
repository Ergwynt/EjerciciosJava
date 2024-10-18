const boton = document.getElementById('batiseñal-btn');
const batiseñal = document.getElementById('batiseñal-container');
const batiseñalImg = document.getElementById('batiseñal-img');

boton.addEventListener('click', function() {
    
    if (batiseñal.style.display === "none" || batiseñal.style.display === "") {
        batiseñal.style.display = "block";
        batiseñalImg.classList.add('show');
    } else {
        batiseñal.style.display = "none";
        batiseñalImg.classList.remove('show');
    }
});
