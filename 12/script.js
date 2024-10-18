const superheroSelect = document.getElementById('superhero-select');
const superpowerDisplay = document.getElementById('superpower');

const poderes = {
    batman: "Mejor detective del mundo, millonario, poder del guión y habilidades de combate.",
    ironman: "Inteligencia superior y armadura equipada con tecnología avanzada.",
    hulk: "Fuerza sobrehumana que aumenta con la ira.",
    thor: "Fuerza divina, control sobre el trueno, y el poder de Mjolnir.",
    wolverine: "Cuerpo recubierto de metal casi indestructible, regenración y capacidad de sacar unas garras de sus brazos"
};


function mostrarPoder() {
    const hero = superheroSelect.value;

    if (hero) {
        const poder = poderes[hero];
        superpowerDisplay.textContent = `El poder de ${superheroSelect.options[superheroSelect.selectedIndex].text} es: ${poder}`;
    } else {
        superpowerDisplay.textContent = "¡Selecciona un superhéroe para ver su poder!";
    }
}


superheroSelect.addEventListener('change', mostrarPoder);


superpowerDisplay.textContent = "¡Selecciona un superhéroe para ver su poder!";
