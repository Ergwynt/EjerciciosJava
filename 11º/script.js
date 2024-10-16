class Superman {
    constructor(imagenElement) {
        this.imagen = imagenElement;
        this.posicionY = 0;
    }

    volar() {
        this.posicionY -= 50;
        this.imagen.style.transform = `translateY(${this.posicionY}px)`;
    }
}

const imagenSuperman = document.getElementById('superman');
const superman = new Superman(imagenSuperman);

const botonVolar = document.getElementById('volar-btn');
botonVolar.addEventListener('click', () => {
    superman.volar();
});
