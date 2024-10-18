class Superman {
    constructor(imagenElement, fraseElement) {
        this.imagen = imagenElement;
        this.frase = fraseElement;
        this.posicionY = 0;
        this.fraseTexto = "¡Hasta el infinito y más allá!";
    }

    volar() {
        this.posicionY -= 100; 
        this.imagen.style.transform = `translateY(${this.posicionY}px)`;
        this.mostrarFrase();
    }

    mostrarFrase() {
        this.frase.textContent = this.fraseTexto;
        this.frase.style.opacity = 1;
        setTimeout(() => {
            this.frase.style.opacity = 0;  // Oculto la frase después de un tiempo
        }, 2000);
    }

    resetear() {
        this.posicionY = 0;
        this.imagen.style.transform = 'translateY(0)';
        this.frase.textContent = '';
    }
}

const imagenSuperman = document.getElementById('superman');
const fraseSuperman = document.getElementById('frase');
const superman = new Superman(imagenSuperman, fraseSuperman);

const botonVolar = document.getElementById('volar-btn');
const botonReset = document.getElementById('reset-btn');

botonVolar.addEventListener('click', () => {
    superman.volar();
});

botonReset.addEventListener('click', () => {
    superman.resetear();
});


