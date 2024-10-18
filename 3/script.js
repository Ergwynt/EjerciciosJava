class Ejercito {
    constructor(nombre, numeroSoldados, fuerza) {
        this.nombre = nombre;
        this.numeroSoldados = numeroSoldados;
        this.fuerza = fuerza;
    }

    calcularFuerzaTotal() {
        return this.numeroSoldados * this.fuerza;
    }
}

// Función para generar un número aleatorio en un rango
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ejercitos = [
    new Ejercito("ejército de los Hombres de la Ciudad del Lago", generarNumeroAleatorio(3000, 10000), 2),
    new Ejercito("Las Águilas", generarNumeroAleatorio(2000, 8000), 3),
    new Ejercito("Ejército de los Elfos del Bosque", generarNumeroAleatorio(1500, 7000), 4),
    new Ejercito("Ejército de los Enanos de las Colinas de Hierro", generarNumeroAleatorio(1000, 5000), 5),
    new Ejercito("Ejército de los Orcos y Wargos", generarNumeroAleatorio(5000, 15000), 1)
];

function simularBatalla() {
    let ganador = ejercitos[0];
    let fuerzaMaxima = ganador.calcularFuerzaTotal();

    for (let i = 1; i < ejercitos.length; i++) {
        let fuerzaActual = ejercitos[i].calcularFuerzaTotal();
        if (fuerzaActual > fuerzaMaxima) {
            ganador = ejercitos[i];
            fuerzaMaxima = fuerzaActual;
        }
    }

    return ganador;
}

const resultado = simularBatalla();
document.getElementById('resultado').textContent = `El ganador de la batalla es: ${resultado.nombre} con una fuerza total de ${resultado.calcularFuerzaTotal()}.`;
