
const formulario = $("formulario");
const botonCalcular = $("botonCalcular");
const alerta = $("alerta");

botonCalcular.addEventListener('click', calcular)

function calcular() {
    const estatura = parseFloat($("estatura").value);
    const peso = parseFloat($("peso").value);

    if (isNaN(estatura) || isNaN(peso)){
        alerta.textContent = "Ingrese valor valido"
        return;
    }
    const imc = peso / (estatura * estatura);
    alerta.textContent = `Su IMC es: ${imc}`;
}

function $(elemento) {
    return document.getElementById(elemento);
}