class Hechizo {
    constructor(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
}

class Mago {
    constructor(nombre) {
        this.nombre = nombre;
        this.hechizo = this.generarHechizo();
    }

    generarHechizo() {
        const hechizos = [
            new Hechizo("Rayito Mortal", Math.floor(Math.random() * 101)),
            new Hechizo("Fueguito que quema", Math.floor(Math.random() * 101)),
            new Hechizo("Rayo Galáctico", Math.floor(Math.random() * 101)),
            new Hechizo("Ataque Big Bang", Math.floor(Math.random() * 101)),
            new Hechizo("Honda vital YA!!!!!", Math.floor(Math.random() * 101))
        ];
        return hechizos[Math.floor(Math.random() * hechizos.length)];
    }

    invocarHechizo() {
        return this.hechizo;
    }
}

const mago1 = new Mago("Gandalf");
const mago2 = new Mago("Saruman");

function duelo(mago1, mago2) {
    const hechizoMago1 = mago1.invocarHechizo();
    const hechizoMago2 = mago2.invocarHechizo();

    if (hechizoMago1.poder > hechizoMago2.poder) {
        return `${mago1.nombre} gana con el hechizo "${hechizoMago1.nombre}" (${hechizoMago1.poder} de poder).`;
    } else if (hechizoMago1.poder < hechizoMago2.poder) {
        return `${mago2.nombre} gana con el hechizo "${hechizoMago2.nombre}" (${hechizoMago2.poder} de poder).`;
    } else {
        return `Es un empate, ambos hechizos tienen el mismo poder (${hechizoMago1.poder}).`;
    }
}

document.getElementById("iniciar-duelo").addEventListener('click', () => {
    const resultado = duelo(mago1, mago2);
    document.getElementById("resultado").textContent = resultado;
});
