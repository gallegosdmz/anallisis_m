const fecha1 = document.getElementById('fecha1');

const body = document.querySelector('body');
const p = document.querySelectorAll('li');
const h1 = document.querySelectorAll('h1');
const h3 = document.querySelectorAll('h3');
const a = document.querySelectorAll('a');

function fecha() {
    let date = new Date();
    let fecha = date.toLocaleDateString();
    let hora = date.toLocaleTimeString();
    fecha1.innerHTML = fecha + ' ' + hora;

    let fondo = document.getElementById('fondo').value;
    let texto = document.getElementById('texto').value;
    let enlace = document.getElementById('enlace').value;

    body.style.backgroundColor = fondo;
    
    p.forEach(x => {
        x.style.color = texto;
    });

    a.forEach(x => {
        x.style.color = enlace;
    });

    h1.forEach(x => {
        x.style.color = texto;
    });

    h3.forEach(x => {
        x.style.color = texto;
    });
}

setInterval(fecha, 1000);

