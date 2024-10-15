"use strict";

document.addEventListener("DOMContentLoaded", load);/**/

function load() {
    // Inicializamos los carruseles de recomendados y los de categoría
    initRecommendedCarousel();
    initCategoryCarousel(); // Asumiendo que también tienes esta función
}

// Función para inicializar el carrusel recomendado
function initRecommendedCarousel() {
    const carruseles = document.querySelectorAll(".recommended");

    carruseles.forEach((categoria) => {
        const carrusel = categoria.querySelector(".specials");
        const btnLeft = categoria.querySelector(".btn-left-recommended");
        const btnRight = categoria.querySelector(".btn-right-recommended");

        // Función para mover el carrusel hacia la derecha
        const moveRightRecommended = () => {
            const width = carrusel.clientWidth; // Usamos el ancho del carrusel visible
            const maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth; // Máximo desplazamiento permitido

            if (carrusel.scrollLeft + width <= maxScrollLeft) {
                carrusel.scrollLeft += width; // Mueve el carrusel a la derecha
            } else {
                console.log("Ya estás en el último elemento.");
            }
        };

        // Función para mover el carrusel hacia la izquierda
        const moveLeftRecommended = () => {
            const width = carrusel.clientWidth; // Usamos el ancho del carrusel visible

            if (carrusel.scrollLeft > 0) {
                carrusel.scrollLeft -= width; // Mueve el carrusel a la izquierda
            } else {
                console.log("Ya estás en el primer elemento.");
            }
        };

        // Asignar eventos a los botones
        btnRight.addEventListener("click", moveRightRecommended);
        btnLeft.addEventListener("click", moveLeftRecommended);
    });
}

// Asegúrate de llamar a la función `load` cuando el DOM esté completamente cargado


// Función para inicializar el carrusel de categoría
function initCategoryCarousel() {
    const categorias = document.querySelectorAll(".category"); // Seleccionamos todas las categorias

    categorias.forEach((categoria) => {
        const carrusel = categoria.querySelector(".carrusel"); // Seleccionamos el carrusel de la categoria actual

        const btnLeft = categoria.querySelector(".btn-left");
        const btnRight = categoria.querySelector(".btn-right");
        const btnLeftMobile = categoria.querySelector(".btn-left-mobile");
        const btnRightMobile = categoria.querySelector(".btn-right-mobile");

        // Funcion para mover el carrusel hacia la derecha
        const moveRightCategory = () => {
            const width = carrusel.clientWidth; // Cambiado a clientWidth para un mejor manejo
            const maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth; // Máximo desplazamiento permitido
        
            // Comprueba si se puede desplazar hacia la derecha
            if (carrusel.scrollLeft < maxScrollLeft) {
                carrusel.scrollLeft += width;
            } else {
                console.log("Ya estás en el último elemento.");
            }
        };

        // Función para mover el carrusel hacia la izquierda
        const moveLeftCategory = () => {
            const width = carrusel.getBoundingClientRect().width;

            if (carrusel.scrollLeft > 0) {
                carrusel.scrollLeft -= width;
            } else {
                console.log("Ya estás en el primer elemento.");
            }
        };

        // Asignar eventos a los botones
        btnRight.addEventListener("click", moveRightCategory);
        btnLeft.addEventListener("click", moveLeftCategory);
        btnRightMobile.addEventListener("click", moveRightCategory);
        btnLeftMobile.addEventListener("click", moveLeftCategory);
    });
    
}
// Selecciona todos los carruseles
const carruseles = document.querySelectorAll('.carrusel');

// Función para actualizar los filtros
function updateFilters(carrusel) {
    const filterLeft = carrusel.parentElement.querySelector('.div-filter-left');
    const filterRight = carrusel.parentElement.querySelector('.div-filter-right');


    const isAtStart = carrusel.scrollLeft === 0; // Verifica si está al inicio
    const isAtEnd = carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth -1; // Verifica si está al final

    // Actualiza la opacidad de los filtros
    filterLeft.style.opacity = isAtStart ? '0' : '1';
    filterRight.style.opacity = isAtEnd ? '0' : '1';
    filterRight.style.background = isAtEnd ? 'transparent' : ''; // Restaurar fondo si no está al final
}

// Función para mover el carrusel
function moveCarrusel(carrusel, direction) {
    const scrollAmount = direction === 'left' ? -carrusel.clientWidth : carrusel.clientWidth;
    carrusel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });

    // Usar un timeout para asegurarnos de que el scroll se complete antes de actualizar filtros
    setTimeout(() => updateFilters(carrusel), 300); // Ajustar el tiempo según sea necesario
}

// Agrega el evento 'scroll' a cada carrusel
carruseles.forEach(carrusel => {
    // Actualiza los filtros al cargar la página
    updateFilters(carrusel);

    // Actualiza los filtros cuando el carrusel se desplaza
    carrusel.addEventListener('scroll', () => {
        updateFilters(carrusel);
    });

    // Agregar los botones de navegación
    const btnLeft = carrusel.parentElement.querySelector('.btn-left');
    const btnRight = carrusel.parentElement.querySelector('.btn-right');

    if (btnLeft) {
        btnLeft.addEventListener('click', () => {
            moveCarrusel(carrusel, 'left');
        });
    }

    if (btnRight) {
        btnRight.addEventListener('click', () => {
            moveCarrusel(carrusel, 'right');
        });
    }

    
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const sideNav = document.querySelector('.side-nav');
    const overlay = document.querySelector('.overlay');

    // Evento de clic para abrir/cerrar el menu
    menuIcon.addEventListener("click", function() {
        sideNav.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Cerrar el menú si se hace clic en el en el menu
    overlay.addEventListener("click", function() {
        sideNav.classList.remove('active');
        overlay.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const perfilIcon = document.querySelector(".perfil");
    const profileP = document.querySelector('.profile-panel');
    const overlay = document.querySelector('.overlay');

    perfilIcon.addEventListener("click", function(){
        profileP.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener("click", function() {
        profileP.classList.remove('active');
        overlay.classList.remove('active');
    });

});
document.addEventListener("DOMContentLoaded", load);