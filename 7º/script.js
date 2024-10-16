// Clase Jedi
class Jedi {
    constructor(nombre, arma) {
        this.nombre = nombre;
        this.arma = arma;
        this.nivelFuerza = this.generarFuerza();
    }

    // Genera un nivel de fuerza aleatorio entre 50 y 100
    generarFuerza() {
        return Math.floor(Math.random() * 51) + 50;  // Entre 50 y 100
    }

    atacar() {
        return this.nivelFuerza;
    }
}

// Clase Sith
class Sith {
    constructor(nombre, arma) {
        this.nombre = nombre;
        this.arma = arma;
        this.nivelFuerza = this.generarFuerza();
    }

    // Genera un nivel de fuerza aleatorio entre 50 y 100
    generarFuerza() {
        return Math.floor(Math.random() * 51) + 50;  // Entre 50 y 100
    }

    atacar() {
        return this.nivelFuerza;
    }
}

// Crear instancia de Jedi y Sith con sus respectivos nombres y armas
const jedi = new Jedi("Obi-Wan Kenobi", "Sable de Luz Azul");
const sith = new Sith("Darth Vader", "Sable de Luz Rojo");

// Función para simular el combate
function combate(jedi, sith) {
    const resultado = document.getElementById("resultado");
    
    // Mostrar el nivel de fuerza de cada uno
    resultado.innerHTML = `
        ${jedi.nombre} (Fuerza: ${jedi.nivelFuerza}) VS ${sith.nombre} (Fuerza: ${sith.nivelFuerza})<br><br>
    `;

    if (jedi.atacar() > sith.atacar()) {
        resultado.innerHTML += `${jedi.nombre} ha ganado el combate.`;
    } else if (sith.atacar() > jedi.atacar()) {
        resultado.innerHTML += `${sith.nombre} ha ganado el combate.`;
    } else {
        resultado.innerHTML += `¡Es un empate! Ambos tienen el mismo nivel de fuerza.`;
    }
}

// Iniciar el combate al cargar la página
combate(jedi, sith);
