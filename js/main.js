function actualizarEstilos() {
    const header = document.querySelector('header');
    const logo = document.querySelector('header .logoPrincipal img');
    const telefonoIcono = document.querySelector('header .icoTelefono i');
    const navLinks = document.querySelectorAll('header .barraNavegacion li a');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.style.backgroundColor = '#EAAB02';
        logo.src = './img/logo-blanco.png'; // Cambia el logo al hacer scroll
        logo.style.width = '70px'; // Cambia el tamaño del logo al hacer scroll
        telefonoIcono.style.color = 'white'; // Cambia el color del ícono del teléfono a blanco
        // Cambia el color del texto del nav al hacer scroll
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
    } else {
        header.style.backgroundColor = 'white';
        logo.src = './img/logo-naranja.png'; // Restaura el logo cuando no hay scroll
        logo.style.width = '70px'; // Restaura el tamaño del logo cuando no hay scroll
        telefonoIcono.style.color = '#EAAB02'; // Restaura el color del ícono del teléfono cuando no hay scroll
        // Restaura el color original del texto del nav cuando no hay scroll
        navLinks.forEach(link => {
            link.style.color = 'black';
        });
    }
}

window.addEventListener('scroll', actualizarEstilos);
window.addEventListener('load', actualizarEstilos);

window.addEventListener('scroll', () => {
    const botonCirculo = document.querySelector('.boton-circulo');
    const scrollPosition = window.scrollY;

    // Si la posición de desplazamiento es mayor que cierta cantidad, muestra el botón, de lo contrario, ocúltalo
    if (scrollPosition > 200) {
        botonCirculo.style.display = 'block';
    } else {
        botonCirculo.style.display = 'none';
    }
});
window.addEventListener('scroll', () => {
    const botonCirculo = document.querySelector('.boton-circulo');
    const scrollPosition = window.scrollY;

    // Si la posición de desplazamiento es mayor que cierta cantidad, muestra el botón, de lo contrario, ocúltalo
    if (scrollPosition > 200) {
        botonCirculo.classList.add('mostrar');
        botonCirculo.classList.remove('ocultar');
    } else {
        botonCirculo.classList.add('ocultar');
        botonCirculo.classList.remove('mostrar');
    }
});

window.addEventListener('scroll', () => {
    const botonCirculo = document.querySelector('.boton-circulo');
    const footer = document.querySelector('footer');
    const scrollPosition = window.scrollY;

    // Si la posición de desplazamiento es mayor que cierta cantidad y no hemos llegado al footer, muestra el botón
    if (scrollPosition > 200 && scrollPosition < footer.offsetTop) {
        botonCirculo.style.display = 'block';
    } else {
        botonCirculo.style.display = 'none';
    }
});

