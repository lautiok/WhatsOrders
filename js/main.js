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


