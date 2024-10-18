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
const fallido = document.getElementById("error");

const planText = document.getElementById("plan-text");
planText.textContent = joker.obtenerPlan();

const botonCambiarPlan = document.getElementById("cambiar-plan");
const inputNuevoPlan = document.getElementById("nuevo-plan");

botonCambiarPlan.addEventListener('click', () => {
    
    const nuevoPlan = inputNuevoPlan.value;
    if (nuevoPlan) {
        fallido.style.visibility = "hidden";
        joker.cambiarPlan(nuevoPlan);
        planText.textContent = joker.obtenerPlan();
        inputNuevoPlan.value = "";
    } else {
        fallido.style.visibility = "visible";
        fallido.style.backgroundColor = "red";
    }
});

