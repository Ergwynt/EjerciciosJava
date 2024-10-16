const superheroSelect = document.getElementById('superhero-select');
const superpowerDisplay = document.getElementById('superpower');

const poderes = {
    superman: "Superfuerza, visión láser, vuelo, aliento de hielo.",
    batman: "Mejor detective del mundo, millonario, poder del guión y habilidades de combate.",
    spiderman: "Agilidad, sentido arácnido, y fuerza sobrehumana.",
    wonderwoman: "Fuerza, velocidad, habilidades de combate, y la Lazo de la Verdad",
    flash: "Supervelocidad"
};

superheroSelect.addEventListener('change', function() {
    const hero = this.value;
    if (hero) {
        superpowerDisplay.textContent = `El poder de ${this.options[this.selectedIndex].text} es: ${poderes[hero]}`;
    } else {
        superpowerDisplay.textContent = "Selecciona un superhéroe para ver su poder.";
    }
});
