class Villano {
    constructor(plan) {
        this.plan = plan;
    }

    cambiarPlan(nuevoPlan) {
        this.plan = nuevoPlan;
    }

    obtenerPlan() {
        return this.plan;
    }
}

const joker = new Villano("Destruir Gotham");

const planText = document.getElementById("plan-text");
planText.textContent = joker.obtenerPlan();

const botonCambiarPlan = document.getElementById("cambiar-plan");
const inputNuevoPlan = document.getElementById("nuevo-plan");

botonCambiarPlan.addEventListener('click', () => {
    const nuevoPlan = inputNuevoPlan.value;
    if (nuevoPlan) {
        joker.cambiarPlan(nuevoPlan);
        planText.textContent = joker.obtenerPlan();
        inputNuevoPlan.value = "";
    } else {
        alert("Por favor, introduce un plan.");
    }
});
