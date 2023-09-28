// Carrusel
let indiceImagen = 0;
const imagenes = document.querySelectorAll('.carrusel div');



// Cotizador
const cotizar = () => {
    const cantidad = document.querySelector('#cantidad').value;
    const precio = Number(document.querySelector(".active").querySelector("h2").innerHTML.replace('$', '').replace('.', ''));
    console.log(precio);
    const total = cantidad * precio;
    console.log(total);
    document.getElementById('resultadoCotizacion').innerText = `Total a pagar: $${total}`;
    document.querySelector("#btn-cancelar").hidden = false

}
function actualizarCarrusel(elementosCarrusel) {
    const nuevoTransform = -indiceCarrusel * 100 + '%';
    elementosCarrusel.forEach(elemento => {
        elemento.style.transform = `translateX(${nuevoTransform})`;
    });
}
const clean = ()=>{
    document.getElementById('resultadoCotizacion').innerText = ``
    document.querySelector("#btn-cancelar").hidden = true
}