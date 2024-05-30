const formulario = $("formulario");
const mensaje = $("mensaje");
const buttonEnviar = $("buttonEnviar");

buttonEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    validacionFormulario();
});

function validacionFormulario() {
    const nombre = $("nombre").value.trim();
    const apellido = $("apellido").value.trim();
    const edad = parseInt($("edad").value);
    const altura = parseInt($("altura").value);
    const correo = $("correo").value.trim();

    let validar = true;
    let mensajeTxt = '';

    if(!nombre || !apellido || nombre.length > 50 || apellido.length > 50){
        validar = false;
        mensajeTxt += "Colocar Nombre y Apellido - Maximo 50 caracteres"
    }

    if( edad < 0 || edad < 18 || altura < 0 || altura > 230 || !correo.includes('@')) {
        validar = false;
        mensajeTxt += "Colocar Edad mayor a 18 - Altura (Min 0 - Max 230) y correo valido"
    }

    mensaje.textContent = mensajeTxt;

    if (validar) {
        mensaje.classList.add('correcto')
        mensaje.classList.remove('error')
    }else {
        mensaje.classList.remove("correcto")
        mensaje.classList.add("error")
    }
}

function $(elemento) {
    return document.getElementById(elemento);
}