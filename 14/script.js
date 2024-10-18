class Gema {
    constructor(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
}

class Thanos {
    constructor() {
        this.gemas = [];
        this.poderTotal = 0;
    }

    recolectarGema(gema) {
        this.gemas.push(gema);
        this.poderTotal += gema.poder;
        this.mostrarPoderTotal();
    }

    mostrarPoderTotal() {
        const poderTotalElement = document.getElementById('poder-total');
        poderTotalElement.textContent = `Poder Total: ${this.poderTotal}`;
    }
}

const thanos = new Thanos();

const gemas = [
    new Gema("Gema del Espacio", 100),
    new Gema("Gema de la Mente", 150),
    new Gema("Gema del Poder", 200),
    new Gema("Gema de la Realidad", 120),
    new Gema("Gema del Tiempo", 180),
    new Gema("Gema del Alma", 130)
];

const botonRecolectar = document.getElementById('recolectar-gema');
const mensajeElement = document.getElementById('mensaje');
let indice = 0;

botonRecolectar.addEventListener('click', () => {
    if (indice < gemas.length) {
        thanos.recolectarGema(gemas[indice]);
        indice++;
        mensajeElement.textContent = `Has recolectado la ${gemas[indice - 1].nombre}`;
        mensajeElement.classList.remove('hidden');
    } else {
        mensajeElement.textContent = "¡Todas las gemas han sido recolectadas!";
        mensajeElement.classList.remove('hidden');
    }
});

