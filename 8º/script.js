
class Superheroe {
    constructor(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
        this.nivel = this.generarNivelAleatorio(); 
    }

    generarNivelAleatorio() {
        return Math.floor(Math.random() * 51) + 50; 
        }
}


function encontrarMasPoderoso(superheroes) {
    let masPoderoso = superheroes[0];

    for (let i = 1; i < superheroes.length; i++) {
        if (superheroes[i].nivel > masPoderoso.nivel) {
            masPoderoso = superheroes[i];
        }
    }

    return masPoderoso;
}

const superheroes = [
    new Superheroe("Superman", "Superfuerza"),
    new Superheroe("Batman", "Millonario y poder del guión"),
    new Superheroe("Spider-Man", "Agilidad, Sentido Arácnido y superfuerza"),
    new Superheroe("Wonder Woman", "Fuerza y Velocidad"),
    new Superheroe("Flash", "Velocidad")
];

const resultado = document.getElementById("resultado");
const heroeMasPoderoso = encontrarMasPoderoso(superheroes);

resultado.innerHTML = `
    El superhéroe más poderoso es: ${heroeMasPoderoso.nombre} con un nivel de poder de ${heroeMasPoderoso.nivel}.
`;
