// Animación para barra lateral
const contenedor = document.querySelector('#contenedor')

document.querySelector('#botonMenu').addEventListener('click', () => {
    contenedor.classList.toggle('active');
} )

// Parte responsive

const comprobarAncho = () => {
    if(window.innerWidth <= 768){
        contenedor.classList.remove('active');
    } else {
        contenedor.classList.add('active');
    }
}

comprobarAncho() ;

window.addEventListener ('resize', () => {
    comprobarAncho () ;
} );