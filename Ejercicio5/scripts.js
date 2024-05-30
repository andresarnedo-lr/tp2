const superficie = $("superficie");

superficie.onclick =() => {
    const a = parseFloat ($("a").value);
    const b = parseFloat ($("b").value);
    const c = parseFloat ($("c").value);
    if (isNaN(a) || isNaN(b) || isNaN(c) || !a || !b || !c) {
        alert("Ingrese valores validos");
        return
    }
    const triangulo = ((b * c) - a) / 2;
    const rectangulo = b * a; 
    const total = triangulo + rectangulo; 

    alert(`El area total es igual a: ${total}`);
}

function $(elemento) {
    return document.getElementById(elemento);
}